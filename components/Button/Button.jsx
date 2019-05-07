import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const Button = (props) => {
  const buildClassName = (x) => ['outline', 'rounded', 'regular'].reduce((accumulator, currentValue) => {
    if (_.get(x, currentValue, undefined) !== undefined) {
      return `${accumulator} ${currentValue}`;
    }
    return accumulator;
  });

  const { className, children, ...rest } = props;
  return (
    <div className={className}>
      <button
        type="button"
        {...rest}
        className={`btn ${buildClassName(props)}`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Button);
