import React from 'react';
import { graphql, compose } from 'react-apollo';
import { LISTING } from '../../graphql/queries/listing';
import Card from '../Card/Card';
import withStyle from './withStyle';

const HomeListing = ({ listing = [], className }) => {
  const cardsView = listing.map((house) => <Card key={house.id} house={house} />);
  return <div className={`${className}`}>{cardsView}</div>;
};

export default compose(withStyle,
  graphql(LISTING, {
    props: ({ data: { loading, listing } }) => {
      if (!loading) {
        return { listing, loading };
      }
      return { listing: [], loading };
    },
  }))(HomeListing);
