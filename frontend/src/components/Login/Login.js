import React from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../../utils/Auth';

function Login (props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      setEmail(user.email);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.authorize(password, email)
      .then(res => {
        if(res) {
          localStorage.setItem('token', res.token);
          props.onLogin(email);
          props.history.push('/');
          setEmail('');
          setPassword('');
        }
      })
      .catch(err => console.log(err));

  }

  return(
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__header">Вход</h2>
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
        className="auth-form__submit-btn"
        type="submit"
      >
        Войти
      </button>
    </form>
  )
}

export default withRouter(Login);
