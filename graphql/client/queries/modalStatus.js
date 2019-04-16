import gql from 'graphql-tag';

export const MODAL_STATUS = gql`
    query modalStatus {
        modalStatus @client {
            __typename
            modalName
        }
    }
`;
