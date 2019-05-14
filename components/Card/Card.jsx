import React from 'react';
import withStyle from './withStyle';
import Carousel from '../Carousel/Carousel';

const Card = ({ className, house }) => (
  <div className={`${className}`}>
    <div className="card__slider">
      <Carousel indicators>
        {house.picture_urls.slice(0, 5).map((img) => (
          <img src={img} alt="" />
        ))}
      </Carousel>
    </div>
    <div className="card__body">
      <h3>
        {house.space_type}.{house.beds}lit
      </h3>
      <h2>{house.name}</h2>
      <p>
        {house.pricing_quote.nightly_price || ' '}
        <span className="currency euro" />
        par nuit
      </p>
    </div>
  </div>
);

export default withStyle(Card);
