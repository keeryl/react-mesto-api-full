import React from 'react';
import logo from '../../blocks/header/images/logo__img.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Header (props) {

  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();
  let location = useLocation();
  const buttonText = `${location.pathname === "/sign-up"? "Войти" : "Регистрация"}`;
  const path = `${location.pathname === "/sign-up"? "/sign-in" : "/sign-up"}`

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.onLogout();
    history.push('/sign-up');
  }

  return (
    <header className="header">
      <Link className="header__logo header__logo_margin-left" to="/" target="_self">
      <img className="header__logo-img" src={logo} alt="Логотип в виде слов Mesto Russia"/>
      </Link>
      {props.loggedIn ?
          (
          <div className="header__wrapper">
          <p className="header__email">{currentUser.email}</p>
          <button className="header__btn" onClick={signOut}>Выйти</button>
          </div>
          )
          :
          (
            <Link className="header__link" to={path}>{buttonText}</Link>
          )
      }
    </header>
  );
}

export default Header;

