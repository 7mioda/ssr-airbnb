import React, { useReducer } from 'react';
import { generate } from 'short-id';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const Rater = ({ className, rating }) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { rating, tempRating: 0 }
  );
  const rate = (newRating) => {
    setState({
      rating: newRating,
      tempRating: rating,
    });
  };

  const hoverStar = (newRating) => {
    const { rating: StateRating } = state;
    setState({
      tempRating: StateRating,
      rating: newRating,
    });
  };

  const leaveStar = () => {
    const { tempRating } = state;
    setState({ rating: tempRating });
  };
  const stars = [1, 2, 3, 4, 5].map((item, index) => (
    <button
      type="button"
      key={generate()}
      className={`star ${state.rating >= index ? 'filled' : 'outlined'}`}
      onMouseOver={() => hoverStar(index)}
      onMouseOut={leaveStar}
      onClick={() => rate(index)}
      onFocus={() => undefined}
      onBlur={() => undefined}
    />
  ));

  return (
    <div className={className}>
      {stars}
    </div>
  );
};


Rater.propTypes = {
  className: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default withStyle(Rater);
