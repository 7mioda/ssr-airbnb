import gql from 'graphql-tag';

export const SET_CONNECTED_USER_INFO = gql`
  mutation setConnectedUserInfo  ($userInfo: UserInfo){
      setConnectedUserInfo(userInfo: $userInfo) @client
  }
`;
