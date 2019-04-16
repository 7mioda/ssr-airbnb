import gql from 'graphql-tag';


export const SET_ROOMS_POSITIONS = gql`
    mutation setRoomsPositions($roomsMarkers: [RoomMarker] ){
        setRoomsPositions(roomsMarkers: $roomsMarkers) @client
    }
`;
