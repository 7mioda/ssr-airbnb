import React, { useState, useEffect } from 'react';
import withStyle from './withStyle';

const Carousel = ({
  children,
  className,
  time,
  auto,
  indicators,
  defaultIndex,
}) => {
  const [index, setIndex] = useState(defaultIndex || 0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (auto) {
      clearTimeout(id);
    }
    const carousel = window.document.querySelector('#carousel');
    setWidth(carousel.clientWidth);
    return () => undefined;
  }, [auto, id]);
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
    console.log(id) || (
      <div className={className} id="carousel">
        <button
          type="button"
          className="slide__button slide__button--next"
          onClick={() => {
            if (auto) {
              clearTimeout(id);
            }
            moveToSlide(index + 1);
          }}
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
          onClick={() => {
            if (auto) {
              clearTimeout(id);
            }
            moveToSlide(index - 1);
          }}
        >
          <i className="icon-chevron-left" />{' '}
        </button>
        {indicators && (
          <div className="indicator-container">{indicatorsView}</div>
        )}
      </div>
    )
  );
};

export default withStyle(Carousel);
