import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button
      background="grey"
      color="white"
      onClick={() => alert("I'am clickable")}
    >
      Hello Button
    </Button>
  ))
  .add('with text rounded', () => (
    <Button
      rounded
      background="grey"
      color="white"
      onClick={() => alert("I'am clickable")}
    >
      Hello Button
    </Button>
  ))
  .add('outlined', () => (
    <Button
      background="white"
      color="red"
      onClick={() => alert("I'am clickable")}
    >
      Hello Button
    </Button>
  ))
  .add('with emoji', () => (
    <Button background="grey">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('outlined regular', () => (
    <Button
      background="white"
      color="red"
      regular
      onClick={() => alert("I'am clickable")}
    >
      Hello Button
    </Button>
  ));
