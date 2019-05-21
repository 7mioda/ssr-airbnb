import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ids from 'short-id';
import withStyle from './withStyle';

const Slider = ({
  children,
  itemNumber = 1,
  className,
  time,
  auto,
  indicators,
}) => {
  const [slides, setSlides] = useState([...children]);
  useEffect(() => {
    if (auto) {
      const timeOut = setTimeout(() => {
        moveToNextSlide();
      }, time || 5000);
      return () => clearTimeout(timeOut);
    }
    return () => undefined;
  }, [auto, moveToNextSlide, time]);
  const moveToNextSlide = useCallback(() => {
    const newSlides = [...slides];
    const slide = newSlides.shift();
    newSlides.push(slide);
    setSlides(newSlides);
  });
  const moveToPreviousSlide = () => {
    const newSlides = [...slides];
    const slide = newSlides.pop();
    newSlides.unshift(slide);
    setSlides(newSlides);
  };
  const keysAction = ({ keyCode }) => {
    if (keyCode === 39 || keyCode === 37) {
      if (keyCode === 39) {
        moveToNextSlide();
      } else if (keyCode === 37) {
        moveToPreviousSlide();
      }
    }
  };
  const childrenView = slides.map((child) => child);
  return (
    <div
      className={className}
      data-testid="carousel"
      id="carousel"
      onKeyDown={(event) => keysAction(event)}
    >
      <button
        type="button"
        className="slide__button slide__button--next"
        onClick={() => moveToNextSlide()}
      >
        <i className="icon-chevron-right" />{' '}
      </button>
      <div className="slides">{childrenView}</div>
      <button
        type="button"
        className="slide__button slide__button--previous icon-right-arrow"
        onClick={() => moveToPreviousSlide()}
      >
        <i className="icon-chevron-left" />{' '}
      </button>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string.isRequired,
  time: PropTypes.number,
  auto: PropTypes.bool,
};

Slider.defaultProps = {
  time: 5000,
  auto: false,
};

export default React.memo(withStyle(Slider));
