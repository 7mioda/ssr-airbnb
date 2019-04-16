import gql from 'graphql-tag';

export const CONNECTED_USER = gql`
    query connectedUser {
        connectedUser @client {
            about
            acceptance_rate
            bookings
            created_at
            email
            first_name
            friends_count
            has_available_payout_info
            has_profile_pic
            id
            identity_verified
            listings_count
            picture_url
            recommendation_count
            response_rate
            response_time
            reviewee_count
            school
            thumbnail_medium_url
            thumbnail_url
            total_listings_count
            trips
        }
    }
`
