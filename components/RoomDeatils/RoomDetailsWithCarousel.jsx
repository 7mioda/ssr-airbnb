import React from 'react';
import { graphql, compose } from 'react-apollo';
import RoomDetails from './RoomDetails';
import { ROOM_INFO } from '../../graphql/queries/roomInfo';
import ImageMosaicCarousel from '../ImageMosaicCarousel/ImageMosaicCarousel';

const RoomPageWithCarousel = ({ loading, room }) => (
  !loading && (
    <div style={{ height: '100%', position: 'relative' }}>
      <div>
        {room && (
          <ImageMosaicCarousel>
            {room.xl_picture_urls.map((img) => (
              <img src={img} alt="" />
            ))}
          </ImageMosaicCarousel>
        )}
        <div
          style={{
            height: '100%',
            width: '75%',
            margin: '0 auto',
            maxWidth: '1032px',
          }}
        >
          <RoomDetails room={room} />
        </div>
      </div>
    </div>
  )
);

export default compose(
  graphql(ROOM_INFO, {
    props: ({ data: { loading, houseInfo } }) => ({ loading, room: houseInfo }),
    options: ({ roomId: id }) => ({ variables: { id } }),
  })
)(RoomPageWithCarousel);
