import React from 'react';
import dynamic from 'next/dynamic';

const RoomDetailsWihCarousel = dynamic(() => import('../components/RoomDetails/RoomDetailsWithCarousel'), { ssr: false });


const RoomPage = ({ query: { id } }) => (<RoomDetailsWihCarousel roomId={id} />);

RoomPage.getInitialProps = async ({ query }) => ({ query });

export default RoomPage;
