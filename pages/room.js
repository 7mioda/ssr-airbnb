import React from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from 'react-apollo-hooks';
import RoomDetails from '../components/RoomDetails/RoomDetails';
import { ROOM_INFO } from '../graphql/queries/roomInfo';

const ImageMosaicCarousel = dynamic(() => import('../components/ImageMosaicCarousel/ImageMosaicCarousel'), {ssr: false});


// eslint-disable-next-line no-mixed-operators
const RoomPage = ({ query: { id } }) => {

  const { loading, data: { houseInfo: room } } = useQuery(ROOM_INFO, { variables: { id } });
  return !loading && (
    <div style={{ height: '100%', position: 'relative' }}>
      <div>
        {room && (
          <ImageMosaicCarousel>
            {
              room.xl_picture_urls.map((img) => <img src={img} alt="" />)
            }
          </ImageMosaicCarousel>
        )}
        <div
          style={{
            height: '100%', width: '75%', margin: '0 auto', maxWidth: '1032px',
          }}
        >
          <RoomDetails room={room} />
        </div>
      </div>
    </div>
  );
};

RoomPage.getInitialProps = async ({ query }) => ({ query });

export default RoomPage;
