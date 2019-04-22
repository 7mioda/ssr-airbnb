import React, { useState } from 'react';
import withStyle from './withStyle';

const Carousel = ({ children, className, width }) => {
  const [index, setIndex] = useState(0);
  const childrenView = children.map((child) => <li className="slide">{child}</li>);
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
      <span className="slide__button slide__button--next" onClick={() => moveToSlide(index + 1)} />
      <ul className="slide__track" style={{ transform: `translateX(-${index * width}px)` }}>
        {childrenView}
      </ul>
      <span className="slide__button slide__button--previous" onClick={() => moveToSlide(index - 1)} />
    </div>
  );
};


export default withStyle(Carousel);
