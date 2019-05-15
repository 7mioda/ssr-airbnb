import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import gql from 'graphql-tag';
import fetch from 'isomorphic-unfetch';


import resolvers from '../graphql/client/resolvers';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const cache = new InMemoryCache().restore(initialState || {});
  const typeDefs = gql`
    type RoomMarker {
      lat: Float
      lng: Float
      roomId: ID
    }
  `;

  cache.writeData({
    data: {
      connectedUser: {
        __typename: 'ConnectedUser',
        about: '',
        acceptance_rate: '',
        bookings: 0,
        created_at: '',
        email: '',
        first_name: '',
        friends_count: 0,
        has_available_payout_info: false,
        has_profile_pic: false,
        id: 0,
        identity_verified: false,
        listings_count: 0,
        picture_url: '',
        recommendation_count: 0,
        response_rate: '',
        response_time: '',
        reviewee_count: 0,
        school: '',
        thumbnail_medium_url: '',
        thumbnail_url: '',
        total_listings_count: 0,
        trips: 0,
      },
      userStatus: {
        __typename: 'UserStatus',
        connected: false,
      },
      roomsPositions: {
        __typename: 'RoomsPositions',
        roomsMarker: [],
      },
      hoveredRoom: {
        __typename: 'HoveredRoom',
        lat: 0,
        lng: 0,
        roomId: '',
      },
      modalStatus: {
        __typename: 'ModalStatus',
        modalName: 'none',
      },
      menuStatus: {
        __typename: 'ModalStatus',
        dropDown: 'none',
      },
    },
  });


  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    cache,
    link: ApolloLink.from([
      createHttpLink({ uri: 'http://localhost:4000/graphql' }),
    ]),
    typeDefs,
    resolvers,
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
