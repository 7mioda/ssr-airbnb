import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LISTING } from '../../graphql/queries/listing';
import Card from '../Card/Card';

const HomeListing = () => {
  const {
    loading,
    data: { listing },
  } = useQuery(LISTING);
  return (
    !loading && (
      <div>
        {listing.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    )
  );
};

export default HomeListing;
