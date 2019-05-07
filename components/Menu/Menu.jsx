import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

export const MenuContext = createContext({
  activeItem: 'none',
  setActiveItem: () => undefined,
});

const Menu = ({ className, children }) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className={`${className}`}>
      <MenuContext.Provider value={{ activeItem, setActiveItem }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};


export default withStyle(Menu);
