import React from 'react';
import { storiesOf } from '@storybook/react';
import PopUp from '../components/PopUp/PopUp';

storiesOf('PopUp', module).add('PopUp', () => (
  <PopUp visible>
    <span role="img" aria-label="so cool">
      😎
    </span>
  </PopUp>
));
