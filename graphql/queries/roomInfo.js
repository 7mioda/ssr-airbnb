import gql from 'graphql-tag';

export const ROOM_INFO = gql`
  query houseInfo($id: ID){
    houseInfo(id: $id){
      id
      city
      thumbnail_url
      medium_url
      user_id
      picture_url
      xl_picture_url
      price
      native_currency
      price_native
      price_formatted
      lat
      lng
      country
      name
      smart_location
      has_double_blind_reviews
      instant_bookable
      bathrooms
      bedrooms
      beds
      market
      min_nights
      person_capacity
      state
      zipcode
      primary_host {
        id
        first_name
        picture_url
        thumbnail_url
        has_profile_pic
        created_at
        reviewee_count
        recommendation_count
        last_name
        thumbnail_medium_url
        picture_large_url
        response_time
        response_rate
        acceptance_rate
        wishlists_count
        publicly_visible_wishlists_count
        is_superhost
      }
      address
      country_code
      cancellation_policy
      property_type
      reviews_count
      room_type
      room_type_category
      picture_urls
      thumbnail_urls
      xl_picture_urls
      picture_count
      currency_symbol_left
      picture_captions
      bed_type
      bed_type_category
      require_guest_profile_picture
      require_guest_phone_verification
      force_mobile_legal_modal
      allowed_currencies
      cancel_policy
      check_in_time
      check_in_time_ends_at
      check_out_time
      guests_included
      max_nights
      square_feet
      locale
      has_viewed_terms
      has_viewed_cleaning
      has_agreed_to_legal_terms
      has_viewed_ib_perf_dashboard_panel
      localized_city
      language
      public_address
      map_image_url
      has_license
      experiences_offered
      max_nights_input_value
      min_nights_input_value
      requires_license
      property_type_id
      house_rules
      cleaning_fee_native
      extras_price_native
      security_deposit_native
      security_price_native
      security_deposit_formatted
      description
      description_locale
      summary
      space
      access
      interaction
      neighborhood_overview
      notes
      transit
      amenities
      amenities_ids
      is_location_exact
      in_building
      in_landlord_partnership
      in_toto_area
      calendar_updated_at
      cancel_policy_short_str
      star_rating
      price_for_extra_person_native
      weekly_price_native
      time_zone_name
      weekly_price_factor
      monthly_price_factor
    }
  }
`;