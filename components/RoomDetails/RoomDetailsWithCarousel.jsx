import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import RoomDetails from './RoomDetails';
import { ROOM_INFO } from '../../graphql/queries/roomInfo';
import ImageMosaicCarousel from '../ImageMosaicCarousel/ImageMosaicCarousel';

const RoomPageWithCarousel = ({ roomId: id }) => {
  const {
    loading,
    data: { houseInfo: room },
  } = useQuery(ROOM_INFO, { variables: { id } });
  return (
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
};

export default RoomPageWithCarousel;
