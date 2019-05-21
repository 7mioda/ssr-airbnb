import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import ids from 'short-id';
import withStyle from './withStyle';

const Carousel = ({
  children,
  itemNumber = 1,
  className,
  time,
  auto,
  indicators,
  defaultIndex,
}) => {
  const [index, setIndex] = useState(defaultIndex || 0);
  const [width, setWidth] = useState(0);
  const [slides, setSlides] = useState([...children]);
  useEffect(() => {
    if (auto) {
      const timeOut = setTimeout(() => {
        moveToSlide(index + 1);
      }, time || 5000);
      return () => clearTimeout(timeOut);
    }
    return () => undefined;
  }, [auto, index]);
  // Force Component to update while resizing to recalculate width
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIndex(index);
      return () => window.removeEventListener('resize', () => {});
    });
  }, [index]);
  const moveToSlide = (targetIndex) => {
    const newSlides = [...slides];
    const slide = newSlides.shift();
    newSlides.push(slide);
    setSlides(newSlides);
    if (targetIndex === children.length) {
      setIndex(0);
    } else if (targetIndex < 0) {
      setIndex(children.length - 1);
    } else {
      setIndex(targetIndex);
    }
  };
  const keysAction = ({ keyCode }) => {
    if (keyCode === 39 || keyCode === 37) {
      if (keyCode === 39) {
        moveToSlide(index + 1);
      } else if (keyCode === 37) {
        moveToSlide(index - 1);
      }
    }
  };
  const childrenView = slides.map((child) => (child));
  const indicatorsView = slides.map((child, i) => (
    <button
      key={ids.generate()}
      type="button"
      className={`indicator ${index === i ? 'active' : ''}`}
      onClick={() => setIndex(i)}
    />
  ));
  return (
    <div
      className={className}
      data-testid="carousel"
      id="carousel"
      ref={(el) => {
        if (!el) return;
        setWidth(el.getBoundingClientRect().width);
      }}
      onKeyDown={(event) => keysAction(event)}
    >
      <button
        type="button"
        className="slide__button slide__button--next"
        onClick={() => moveToSlide(index + 1)}
      >
        {' '}
        <i className="icon-chevron-right" />{' '}
      </button>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
          {childrenView}
      </ReactCSSTransitionGroup>
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

export default React.memo(withStyle(Carousel));
