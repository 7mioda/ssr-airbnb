import React from 'react';
import { compose, graphql } from 'react-apollo';
import withStyle from './withStyle';
import { USER_STATUS } from '../../graphql/client/queries/userStatus';
import { MENU_STATUS } from '../../graphql/client/queries/menuStatus';
import { TOGGLE_USER_STATUS } from '../../graphql/client/mutations/toggleUserStatus';
import { CONNECTED_USER } from '../../graphql/client/queries/connectedUser';
import { TOGGLE_MENU } from '../../graphql/client/mutations/toggleMenu';

const Header = ({
  className,
  openModal,
  userStatus: { connected },
  toggleMenu,
  dropDown,
  history,
  toggleUserStatus,
  connectedUser,
}) => (
  <div
    className={`${className}`}
    onClick={(event) => {
      event.stopPropagation();
      toggleMenu('none');
    }}
  >
    <div>
      <div className="logo" />
      <div className="search-box">
        <span className="search-box-icon" />
        <input
          type="text"
          placeholder="Partout . Logement"
          className="search-text"
        />
      </div>
    </div>
    <nav className="landing-nav">
      <div
        className="nav-item"
        onClick={(event) => {
          event.stopPropagation();
          toggleMenu('host');
        }}
      >
        <div>Devenir hote</div>
        <div
          className="dropdwon-menu"
          style={{ width: '350px' }}
          hidden={!(dropDown === 'host')}
        >
          <div className="section">
            <h3>logements</h3>
            <h4 className="icon home">Publiez votre annonce</h4>
            <p>
              Gagnez jusqu'à $478 par mois en hébergeant des voyageurs à
              Manouba.
            </p>
            <h4>En savoir plus</h4>
          </div>
          <div className="section">
            <h3>experiences</h3>
            <h4 className="icon island">Créer une expérience</h4>
            <p>
              Gagnez de l'argent en partageant votre passion à des voyageurs
            </p>
          </div>
        </div>
      </div>
      {connected && <span className="nav-item"> Liste </span>}
      {connected && <span className="nav-item"> Voyages </span>}
      {connected && (
        <div className="nav-item">
          <div
            onClick={(event) => {
              event.stopPropagation();
              toggleMenu('messages');
            }}
          >
            Messages
          </div>
          <div className="dropdwon-menu" hidden={!(dropDown === 'messages')}>
            <div
              className="dropdown-menu-item"
              onClick={() => history.push('/airbnb.fr/users/edit?from_user_menu=1')
              }
            >
              Profil
            </div>
            <div className="dropdown-menu-item">Compote</div>
            <div className="dropdown-menu-item">Inviter des amis</div>
            <div className="dropdown-menu-item">Votre guide</div>
            <div className="dropdown-menu-item">Airbnb for work</div>
            <div className="dropdown-menu-item">Déconnexion</div>
          </div>
        </div>
      )}
      <span className="nav-item"> Aide </span>
      {connected && (
        <div
          className="nav-item"
          onClick={(event) => {
            event.stopPropagation();
            toggleMenu('user');
          }}
        >
          <img
            src={
              connectedUser
                ? connectedUser.thumbnail_medium_url
                : 'https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'
            }
            alt=""
          />
          <div className="dropdwon-menu" hidden={!(dropDown === 'user')}>
            <div
              className="dropdown-menu-item"
              onClick={() => history.push('/airbnb.fr/users/edit?from_user_menu=1')
              }
            >
              Profil
            </div>
            <div className="dropdown-menu-item">Compote</div>
            <div className="dropdown-menu-item">Inviter des amis</div>
            <div className="dropdown-menu-item">Votre guide</div>
            <div className="dropdown-menu-item">Airbnb for work</div>
            <div
              className="dropdown-menu-item"
              onClick={() => toggleUserStatus()}
            >
              Déconnexion
            </div>
          </div>
        </div>
      )}
      {!connected && (
        <span
          className="nav-item"
          onClick={() => openModal('pre-subscription')}
        >
          {' '}
          Inscription{' '}
        </span>
      )}
      {!connected && (
        <span className="nav-item" onClick={() => openModal('login')}>
          {' '}
          Connexion{' '}
        </span>
      )}
    </nav>
  </div>
);

export default compose(
  graphql(TOGGLE_USER_STATUS, {
    props: ({ mutate }) => ({ toggleUserStatus: () => mutate() }),
  }),
  graphql(TOGGLE_MENU, {
    props: ({ mutate }) => ({
      toggleMenu: (dropDown) => mutate({ variables: { dropDown } }),
    }),
  }),
  graphql(MENU_STATUS, {
    props: ({
      data: {
        menuStatus: { dropDown },
      },
    }) => ({ dropDown }),
  }),
  graphql(USER_STATUS, {
    props: ({ data: { userStatus } }) => ({ userStatus }),
  }),
  graphql(CONNECTED_USER, {
    props: ({ data: { connectedUser } }) => ({ connectedUser }),
    skip: ({ userStatus: { connected } }) => !connected,
  }),
  withStyle
)(Header);
