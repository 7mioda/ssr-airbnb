import React, { useState } from 'react';
import withStyle from './withStyle';

const Slider = ({ images, width, height, className }) => {
  const [showedImage, changeShowedImage] = useState(0);
  const { length } = images;
  const next = () => (showedImage === length - 1) ? changeShowedImage(0)
    : changeShowedImage((showedImage + 1));
  const previous = () => (showedImage === 0) ? changeShowedImage(length - 1)
    : changeShowedImage((showedImage - 1));
  return (
    <div className={`${className}`} style={{}} >
      <span className="previous" onClick={(event) => { event.stopPropagation(); previous(); }} />
      <span className="next" onClick={(event) => { event.stopPropagation(); next(); }} />
      <img className="slide-image" key={showedImage} src={`${images[showedImage]}`} alt="" />
      <img className="slide-image" key={showedImage + 1} hidden src={`${images[showedImage + 1]}`} alt="" />
    </div>
  );
};

export default withStyle(Slider);