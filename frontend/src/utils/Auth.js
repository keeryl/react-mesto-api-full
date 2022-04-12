
const baseUrl = 'http://api.keeryl-mesto.nomoredomains.work';


class Auth {
  constructor (baseUrl) {
    this._baseUrl = baseUrl;
  }

  register (userPassword, userEmail) {
    console.log(`Запрос на сервер для регистрации: ${JSON.stringify({
      password: userPassword,
      email: userEmail,
    })}`);
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: userPassword,
        email: userEmail,
      }),
    })
    .then(this._checkResponse);
  }

  authorize (userPassword, userEmail) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: userPassword,
        email: userEmail
      }),
    })
    .then(this._checkResponse);
  }

  getContent (jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`,
      },
    })
    .then(this._checkResponse);
  }

  _checkResponse (response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

}

const auth = new Auth(baseUrl);


export default auth;
