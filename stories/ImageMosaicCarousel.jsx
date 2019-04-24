import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageMosaicCarousel from '../components/ImageMosaicCarousel/ImageMosaicCarousel';

import imageFile from '../static/img/1.jpg';
import imageFile1 from '../static/img/2.jpg';
import imageFile2 from '../static/img/3.jpg';
import imageFile3 from '../static/img/4.jpg';
import imageFile4 from '../static/img/5.jpg';
import imageFile5 from '../static/img/6.jpg';

storiesOf('Images Mosaic Carousel', module).add('Images Mosaic Carousel', () => (
  <ImageMosaicCarousel>
    <img src={imageFile} alt="" />
    <img src={imageFile1} alt="" />
    <img src={imageFile2} alt="" />
    <img src={imageFile3} alt="" />
    <img src={imageFile4} alt="" />
    <img src={imageFile5} alt="" />
  </ImageMosaicCarousel>
));
