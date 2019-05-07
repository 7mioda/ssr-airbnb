import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const Input = ({
  className, rounded, Prefix, Suffix, ...rest
}) => (
  <div className={className}>
    {Prefix && (
      <div className="prefix">
        <Prefix.type {...Suffix.props} />
      </div>
    )}
    <input type="text" {...rest} className={rounded && 'rounded'} />
    {Suffix && (
      <div className="suffix">
        <Suffix.type {...Suffix.props} />
      </div>
    )}
  </div>
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  Prefix: PropTypes.object,
  Suffix: PropTypes.object,
};

Input.defaultProps = {
  rounded: false,
  Prefix: undefined,
  Suffix: undefined,
};

export default withStyle(Input);
