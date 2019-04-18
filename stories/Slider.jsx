import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from '../components/Slider/Slider'

const images = [
  'https://picsum.photos/800/800',
  'https://picsum.photos/800/800',
  'https://picsum.photos/800/800',
  'https://picsum.photos/800/800',
]

storiesOf('Slider', module).add('Slider with Images', () => (
  <Slider images={images} height="320px" width="320px" />
))
