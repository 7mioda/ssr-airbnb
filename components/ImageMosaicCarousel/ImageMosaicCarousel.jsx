import React, { useState } from 'react';
import Popup from '../PopUp/PopUp';
import Carousel from '../Carousel/Carousel';
import ImageMosaic from '../ImageMosaic/ImageMosaic';

const ImageMosaicCarousel = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const showImageInCarousel = (x) => {
    setIndex(x);
    setVisible(true);
  };
  return (
    <div style={{ position: 'relative' }}>
      <Popup visible={visible} close={() => setVisible(false)}>
        <div style={{ width: '70vw', height: '80vh', position: 'relative' }}>
          <Carousel defaultIndex={index} indicators>
            {children}
          </Carousel>
        </div>
      </Popup>
      <ImageMosaic
        height="95vh"
        width="100%"
        onImageClick={showImageInCarousel}
        onClick={() => setVisible(!visible)}
      >
        {children}
      </ImageMosaic>
    </div>
  );
};
export default ImageMosaicCarousel;
