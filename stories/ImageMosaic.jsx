import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageMosaic from '../components/ImageMosaic/ImageMosaic';

const images = [
  'https://picsum.photos/800/800',
  'https://picsum.photos/400/800',
  'https://picsum.photos/800/800',
  'https://picsum.photos/500/800',
  'https://picsum.photos/500/800',
];

storiesOf('Images Mosaic', module).add('Images Mosaic with Images', () => (
  <ImageMosaic images={images} height="100vh" width="100%" />
));
