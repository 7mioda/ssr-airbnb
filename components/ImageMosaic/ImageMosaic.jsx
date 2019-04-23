import React from 'react';
import withStyle from './withStyle';

const ImageMosaic = ({ className, images }) => (
  <div className={`${className}`}>
    <div className="left">
      <img src={images[0]} alt="" />
    </div>
    <div className="right">
      <div className="flex-container">
        <div className="mosaic-img">
          <img src={images[1]} alt="" />
        </div>
        <div className="mosaic-img">
          <img src={images[2]} alt="" />
        </div>
        <div className="mosaic-img">
          <img src={images[3]} alt="" />
        </div>
        <div className="mosaic-img">
          <img src={images[4]} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default withStyle(ImageMosaic);
