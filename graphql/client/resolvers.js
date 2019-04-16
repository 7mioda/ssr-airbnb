import gql from 'graphql-tag';

const resolvers = {
  Mutation: {
    openModal: (_, {
      modalName,
    }, { cache }) => {
      const query = gql`
        query modalStatus {
          modalStatus @client {
            __typename
            modalName
          }
        }
      `;
      const { modalStatus } = cache.readQuery({ query });
      cache.writeData({
        data: {
          modalStatus: {
            ...modalStatus,
            modalName,
          },
        },
      });
      return null;
    },
    toggleMenu: (_, {
      dropDown,
    }, { cache }) => {
      const query = gql`
        query menuStatus {
          menuStatus @client {
            __typename
            dropDown
          }
        }
      `;
      const { menuStatus } = cache.readQuery({ query });
      const toPersist = menuStatus.dropDown === dropDown ? 'none' : dropDown;
      cache.writeData({
        data: {
          menuStatus: {
            __typename: 'ModalStatus',
            dropDown: toPersist,
          },
        },
      });
      return null;
    },
    setRoomsPositions: (_, { roomsMarkers }, { cache }) => {
      const data = {
        roomsPositions: {
          __typename: 'RoomsPositions',
          roomsMarker: roomsMarkers,
        },
        hoveredRoom: {
          __typename: 'HoveredRoom',
          lat: roomsMarkers[0].lat || 0,
          lng: roomsMarkers[0].lng || 0,
          roomId: roomsMarkers[0].roomId || '',
        },
      };
      cache.writeData({ data });
      return null;
    },
    changeHoveredRoom: (_, { hoveredRoom }, { cache }) => {
      const data = {
        hoveredRoom: { ...hoveredRoom },
      };
      cache.writeData({ data });
      return null;
    },
    toggleUserStatus: (_, __, { cache }) => {
      const query = gql`
        query userStatus{
          userStatus @client {
            __typename
            connected
          }
        }
      `;
      const { userStatus } = cache.readQuery({ query });
      const data = {
        userStatus: {
          ...userStatus,
          connected: !userStatus.connected,
        },
      };
      cache.writeData({ data });
      return null;
    },
    setConnectedUserInfo: (_, { userInfo }, { cache }) => {
      const data = {
        connectedUser: {
          ...userInfo,
        },
      };
      cache.writeData({ data });
      return null;
    },
  },
};
export default resolvers;
