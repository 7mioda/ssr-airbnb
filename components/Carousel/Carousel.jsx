import React, { useState } from 'react';
import withStyle from './withStyle';

const Carousel = ({
  children, className, width, time, auto, indicators,
}) => {
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
  const autoSlide = () => setTimeout(() => {
    moveToSlide(index + 1);
  }, time || 5000);
  let id;
  if (auto) {
    id = autoSlide();
  }
  const indicatorsView = children.map((child, i) => (
    <button
      type="button"
      className={`indicator ${index === i ? 'active' : ''}`}
      onClick={() => {
        if (auto) {
          clearTimeout(id);
        }
        setIndex(i);
      }}
    />
  ));

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
      {indicators && (
        <div className="indicator-container">{indicatorsView}</div>
      )}
    </div>
  );
};

export default withStyle(Carousel);
