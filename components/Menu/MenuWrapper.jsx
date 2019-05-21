import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';
import withStyle from './withStyleWrapper';


const MenuWrapper = ({ className }) => {
  const [menu, setMenu] = useState(false);
  return(
    <div className={`${className}`}>
      <button className={menu ? 'menu__logo' : 'menu__logo inactive'} type="button" onClick={() => setMenu(!menu)} />
      <Menu right classNames={menu ? ['menu--active'] : ['menu--inactive']}>
        <MenuItem title="Devenez hote" />
        <MenuItem title="Créer une éxpérience" />
        <MenuItem title="Aide"/>
        <MenuItem title="Inscription" />
        <MenuItem title="Connexion" />
      </Menu>
    </div>
  );
};

export default withStyle(MenuWrapper);
