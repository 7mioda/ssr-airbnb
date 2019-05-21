import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../components/Carousel/Carousel';

import imageFile from '../static/img/1.jpg';
import imageFile1 from '../static/img/2.jpg';
import imageFile2 from '../static/img/3.jpg';
import imageFile3 from '../static/img/4.jpg';
import imageFile4 from '../static/img/5.jpg';
import imageFile5 from '../static/img/6.jpg';

storiesOf('Carousel', module)
  .add('Carousel with Images', () => (
    <div style={{ width: '1024px', height: '500px' }}>
      <Carousel itemNumber={5}>
        <img src={imageFile} alt="" />
        <img src={imageFile1} alt="" />
        <img src={imageFile2} alt="" />
        <img src={imageFile3} alt="" />
        <img src={imageFile4} alt="" />
        <img src={imageFile5} alt="" />
      </Carousel>
    </div>
  ))
  .add('Rectangular Carousel with Images', () => (
    <div style={{ width: '500px', height: '500px' }}>
      <Carousel>
        <img src={imageFile} alt="" />
        <img src={imageFile1} alt="" />
        <img src={imageFile2} alt="" />
        <img src={imageFile3} alt="" />
        <img src={imageFile4} alt="" />
        <img src={imageFile5} alt="" />
      </Carousel>
    </div>
  ))
  .add('Carousel with auto Slide Images and indicators', () => (
    <div style={{ width: '1024px', height: '500px' }}>
      <Carousel indicators auto>
        <img src={imageFile} alt="" />
        <img src={imageFile1} alt="" />
        <img src={imageFile2} alt="" />
        <img src={imageFile3} alt="" />
        <img src={imageFile4} alt="" />
        <img src={imageFile5} alt="" />
      </Carousel>
    </div>
  ));
