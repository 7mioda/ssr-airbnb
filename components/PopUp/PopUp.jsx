import React from 'react';
import withStyle from './withStyle';

const PopUp = ({
  className, children, visible, close,
}) => visible && (
  <div className={`${className}`}>
    <button
      type="button"
      className="modal__close-icon"
      onClick={() => close()}
    />
    <div className="modal">
      {children}
    </div>
  </div>
);
export default withStyle(PopUp);
