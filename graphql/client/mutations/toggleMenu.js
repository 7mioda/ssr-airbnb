import gql from 'graphql-tag';

export const TOGGLE_MENU = gql`
    mutation toggleMenu($dropDown: String){
        toggleMenu(dropDown: $dropDown) @client
    }
`;
