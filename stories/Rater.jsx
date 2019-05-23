import React from 'react';
import { storiesOf } from '@storybook/react';
import Rater from '../components/Rater/Rater';

storiesOf('Rater', module)
  .add('simple rater', () => (
    <Rater
      rating={3}
    />
  ));
