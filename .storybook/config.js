import { configure, addParameters } from '@storybook/react';

function loadStories() {
  require('../stories/index.jsx');
  require('../stories/Slider.jsx');
  require('../stories/Carousel.jsx');
  // You can require as many stories as you need.
}

const responsive = {
  desktop: {
    name: 'desktop',
    styles: {
      width: '1024px',
      height: '963px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '320px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...responsive,
    },
  },
});

configure(loadStories, module);
