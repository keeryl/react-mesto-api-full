const config = {
  baseUrl: 'http://api.keeryl-mesto.nomoredomains.work',
}

class Api {
  constructor (config) {
    this._url = config.baseUrl;
    this._token = localStorage.getItem('token');
  }

  // getUserInfo () {
  //   return fetch(`${this._url}/users/me`, {
  //     headers: {
  //       'Authorization': `Bearer ${this._token}`,
  //       // mode: 'no-cors',
  //     }
  //   })
  //   .then(this._checkResponse);
  // }

  getInitialCards () {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${this._token}`,
        // mode: 'no-cors',
      },
    })
    .then(this._checkResponse);
  }

  editUserProfile (userName, userInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this._token}`,
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
        'Authorization': `Bearer ${this._token}`,
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
        'Authorization': `Bearer ${this._token}`,
      },
    })
    .then(this._checkResponse);
  }

  addLike (cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this._token}`,
      },
    })
    .then(this._checkResponse);
  }

  removeLike (cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this._token}`,
      },
    })
    .then(this._checkResponse);
  }

  editAvatar (newUrl) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this._token}`,
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
