import gql from "graphql-tag";

export const ROOMS_POSITIONS = gql`
    query roomsPositions {
        roomsPositions @client {
            __typename
            roomsMarker {
                lat
                lng
                roomId
            }
        }
        hoveredRoom @client {
            __typename
            lat
            lng
            roomId
        }
    }
`;
