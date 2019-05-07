import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ids from 'short-id';
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
    window.addEventListener('resize', () => {
      if (auto) {
        clearTimeout(id);
      }
      setWidth(carousel.clientWidth);
    });
    return () => window.removeEventListener('resize', () => undefined);
  }, [auto, id]);
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
  const keysAction = ({ keyCode }) => {
    if (keyCode === 39 || keyCode === 37) {
      if (keyCode === 39) {
        moveToSlide(index + 1);
      } else if (keyCode === 37) {
        moveToSlide(index - 1);
      }
      if (auto) {
        clearInterval(id);
      }
    }
  };
  const childrenView = children.map((child) => (
    <li className="slide" key={ids.generate()}>
      {child}
    </li>
  ));
  const indicatorsView = children.map((child, i) => (
    <button
      key={ids.generate()}
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
    <div
      className={className}
      id="carousel"
      onKeyDown={(event) => keysAction(event)}
    >
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
  );
};

Carousel.propTypes = {
  className: PropTypes.string.isRequired,
  time: PropTypes.number,
  auto: PropTypes.bool,
  indicators: PropTypes.bool,
  defaultIndex: PropTypes.number,
};

Carousel.defaultProps = {
  time: 5000,
  auto: false,
  indicators: false,
  defaultIndex: 0,
};

export default withStyle(Carousel);
