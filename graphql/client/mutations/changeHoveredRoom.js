import gql from 'graphql-tag';


export const CHANGE_HOVERED_ROOM = gql`
    mutation setRoomsPositions($hoveredRoom: RoomMarker ){
        changeHoveredRoom(hoveredRoom: $hoveredRoom) @client
    }
`;
