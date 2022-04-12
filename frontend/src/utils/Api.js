//////////ТОКЕН//////////////
// Токен: 4e3158fe-c157-45ee-9ba8-36277de198c7
// Идентификатор группы: cohort-25
/////////*****//////////////
// import config from './constants.js';
const config = {
  token: '4e3158fe-c157-45ee-9ba8-36277de198c7',
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
}

class Api {
  constructor (config) {
    this._url = config.baseUrl;
    this._token = config.token;
  }

  getUserInfo () {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
        // mode: 'no-cors',
      }
    })
    .then(this._checkResponse);
  }

  getInitialCards () {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
        // mode: 'no-cors',
      },
    })
    .then(this._checkResponse);
  }

  editUserProfile (userName, userInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        about: userInfo,
      }),
    })
    .then(this._checkResponse);
  }

  addCard (cardTitle, cardLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink,
      }),
    })
    .then(this._checkResponse);
  }

  deleteCard (cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse);
  }

  addLike (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse);
  }

  removeLike (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse);
  }

  editAvatar (newUrl) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: newUrl,
      })
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

const api = new Api(config);


export default api;
