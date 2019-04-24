import React from 'react';
import withStyle from './withStyle';

const ImageMosaic = ({
  className, children, onImageClick, ...rest
}) => (
  <div className={`${className}`} {...rest}>
    <div className="left" onClick={() => onImageClick(0)}>
      {children[0]}
    </div>
    <div className="right">
      <div className="flex-container">
        <div className="mosaic-img" onClick={() => onImageClick(1)}>
          {children[1]}
        </div>
        <div className="mosaic-img" onClick={() => onImageClick(2)}>
          {children[2]}
        </div>
        <div className="mosaic-img" onClick={() => onImageClick(3)}>
          {children[3]}
        </div>
        <div className="mosaic-img" onClick={() => onImageClick(4)}>
          {children[4]}
        </div>
      </div>
    </div>
  </div>
);

export default withStyle(ImageMosaic);
