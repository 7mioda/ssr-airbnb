import gql from 'graphql-tag';

export const LISTING = gql`
  query listing {
    listing {
      bathrooms
      bedrooms
      beds
      city
      id
      lat
      lng
      localized_city
      name
      neighborhood
      person_capacity
      picture_count
      picture_url
      public_address
      reviews_count
      room_type_category
      room_type
      scrim_color
      space_type
      star_rating
      thumbnail_url
      user_id
      xl_picture_url
      picture_urls
      xl_picture_urls
      pricing_quote {
        nightly_price
      }
    }
  }
`;
