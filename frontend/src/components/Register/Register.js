import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../../utils/Auth.js';

function Register (props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(password, email)
      .then(res => {
        if(res) {
          localStorage.setItem('user', JSON.stringify({
            email: res.data.email,
            id: res.data._id
          }));
          props.onRegistrationSubmit(res.data.email);
          setPassword('');
          setEmail('');
        }
      })
      .catch(err => {
        props.onRegistrationError();
        console.log(err);
      })
  }

  return(
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-form__header">Регистрация</h2>
        <fieldset className="auth-form__inputs">
          <input
            type="email"
            className="auth-form__input"
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
          >
          </input>
          <input
            type="password"
            className="auth-form__input"
            onChange={handlePasswordChange}
            value={password}
            placeholder="Пароль"
          >
          </input>
        </fieldset>
        <button
          type="submit"
          className="auth-form__submit-btn"
        >
          Зарегистрироваться
        </button>
        <p className="auth-form__text">
          Уже зарегистрированы?
          <Link
            className="auth-form__link"
            to="/sign-in"
          > Войти
          </Link>
        </p>
      </form>
    </>
  )
}

export default withRouter(Register);
