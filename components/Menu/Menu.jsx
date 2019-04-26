import React, { createContext, useState } from 'react';
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

export default withStyle(Menu);
