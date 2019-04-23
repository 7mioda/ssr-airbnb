import React from 'react';
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

export default withStyle(Input);
