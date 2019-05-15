import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import withApolloClient from '../lib/with-apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
          <ApolloHooksProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloHooksProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
