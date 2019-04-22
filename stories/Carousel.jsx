import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../components/Carousel/Carousel';


storiesOf('Carousel', module).add('Carousel with Images', () => (
  <Carousel height="420" width="420">
    <img src="https://picsum.photos/420/800" alt="" />
    <img src="https://picsum.photos/800/800" alt="" />
    <img src="https://picsum.photos/500/800" alt="" />
    <img src="https://picsum.photos/600/800" alt="" />
    <img src="https://picsum.photos/600/800" alt="" />
  </Carousel>
));
