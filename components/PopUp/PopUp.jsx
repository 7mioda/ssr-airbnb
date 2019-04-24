import React, { useState } from 'react';
import withStyle from './withStyle';

const PopUp = ({ className, children, visible: defaultState }) => {
  const [visible, setVisible] = useState(defaultState);
  console.log(defaultState);
  return (
    <div className={`${className}`} hidden={!visible}>
      <button
        type="button"
        className="modal__close-icon"
        onClick={() => setVisible(false)}
      />
      <div className="modal">{children}</div>
    </div>
  );
};
export default withStyle(PopUp);
