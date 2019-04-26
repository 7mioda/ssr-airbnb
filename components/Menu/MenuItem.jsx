import React, { useContext } from 'react';
import withStyle from './withStyleItem';
import { MenuContext } from './Menu';

const MenuItem = ({ className, title, content }) => {
  const context = useContext(MenuContext);
  const { activeItem, setActiveItem } = context;
  const setActiveMenuItem = (event) => {
    event.preventDefault();
    setActiveItem(title === activeItem ? 'none' : title);
  };
  return (
    <div className={className}>
      <button
        className="menu-item__title"
        type="button"
        onClick={(event) => setActiveMenuItem(event)}
      >
        {title}
      </button>
      {context.activeItem === title && (
        <div className="menu-item__dropdown">{content}</div>
      )}
    </div>
  );
};

export default withStyle(MenuItem);
