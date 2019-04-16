import gql from 'graphql-tag';

export const MENU_STATUS = gql`
    query menuStatus {
        menuStatus @client {
            __typename
            dropDown
        }
    }
`;
