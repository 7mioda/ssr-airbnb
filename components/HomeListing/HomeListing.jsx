import React from 'react';
import { graphql } from 'react-apollo';
import { LISTING } from '../../graphql/queries/listing';
import Card from '../Card/Card';

const HomeListing = ({ listing }) => {
  const cardsView = listing.map((house) => <Card key={house.id} house={house} />);
  return <>{cardsView}</>;
};

export default graphql(LISTING, {
  props: ({ data: { loading, listing } }) => {
    if (!loading) {
      return { listing, loading };
    }
    return { listing: [], loading };
  },
})(HomeListing);
