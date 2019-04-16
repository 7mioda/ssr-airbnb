import gql from 'graphql-tag';

export const OPEN_MODAL = gql`
    mutation openModal($modalName: String){
        openModal(modalName: $modalName) @client
    }
`;
