import gql from 'graphql-tag';

export const TOGGLE_USER_STATUS = gql`
  mutation toggleUserStatus {
      toggleUserStatus @client
  }  
`;
