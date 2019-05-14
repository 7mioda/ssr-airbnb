import React from 'react';
import {
  render,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Carousel from '../components/Carousel/Carousel';


test('check Carousel ', () => {
  const { getByTestId } = render(
    <Carousel>
      <img src="../static/img/1.jpg" alt="" />
      <img src="../static/img/1.jpg" alt="" />
      <img src="../static/img/1.jpg" alt="" />
      <img src="../static/img/1.jpg" alt="" />
      <img src="../static/img/1.jpg" alt="" />
      <img src="../static/img/1.jpg" alt="" />
    </Carousel>
  );
  expect(getByTestId('carousel')).not.toBeNull();
});
