import React, { useState } from 'react';
import withStyle from './withStyle';

const Carousel = ({ children, className, width }) => {
  const [index, setIndex] = useState(0);
  const childrenView = children.map((child) => (
    <li className="slide">{child}</li>
  ));
  const moveToSlide = (targetIndex) => {
    if (targetIndex === children.length) {
      setIndex(0);
    } else if (targetIndex < 0) {
      setIndex(children.length - 1);
    } else {
      setIndex(targetIndex);
    }
  };
  return (
    <div className={className}>
      <button
        type="button"
        className="slide__button slide__button--next"
        onClick={() => moveToSlide(index + 1)}
      >
        {' '}
        <i className="icon-chevron-right" />{' '}
      </button>
      <ul
        className="slide__track"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {childrenView}
      </ul>
      <button
        type="button"
        className="slide__button slide__button--previous icon-right-arrow"
        onClick={() => moveToSlide(index - 1)}
      >
        <i className="icon-chevron-left" />{' '}
      </button>
    </div>
  );
};

export default withStyle(Carousel);
