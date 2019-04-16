import gql from 'graphql-tag';

export const USER_STATUS = gql`
    query modalStatus {
        userStatus @client {
            __typename
            connected
        }
    }
`;
