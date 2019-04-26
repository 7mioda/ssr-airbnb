import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';

storiesOf('Menu', module).add('Menu', () => (
  <Menu>
    <MenuItem
      title="test1"
      content={(
        <ul>
          <li>test55</li>
          <li>test55</li>
          <li>test55</li>
          <li>test55</li>
          <li>test55</li>
        </ul>
      )}
    />
    <MenuItem title="test2" content={<h1>content2</h1>} />
    <MenuItem title="test3" content={<h1>'content'3</h1>} />
    <MenuItem title="test4" content={<h1>content4</h1>} />
    <MenuItem title="test5" content={<h1>content5</h1>} />
  </Menu>
));
