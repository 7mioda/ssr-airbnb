import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Input/Input';

storiesOf('Input', module).add('Input', () => (
  <Input
    width="500px"
    padding="0 20px"
    highlighted
    Prefix={(
      <span role="img" aria-label="so cool">
        😀
      </span>
    )}
    Suffix={(
      <span role="img" aria-label="so cool">
        😎
      </span>
    )}
  />
));
storiesOf('Input', module).add('Input rounded', () => (
  <Input rounded width="200px" />
));
