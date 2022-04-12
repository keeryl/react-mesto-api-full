import React from 'react';
import Card from '../Card/Card.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Main (props) {

const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
    <section className="profile profile_margins">
      <div className="profile__avatar">
        <button className="profile__avatar-btn" type="button" onClick={props.onEditAvatar}></button>
        <img className="profile__photo" src={currentUser.avatar} alt="Фото пользователя"/>
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__description">{currentUser.about}</p>
      </div>
      <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
    </section>
    <section className="semantic-wrapper">
      <ul className="cards">
        {props.cards.map(item => {
            return (
              <Card
                key={item._id}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDeleteClick={props.onCardDeleteClick}
                card={item} />
            )
          })}
      </ul>
    </section>
  </main>
  );
}

export default Main;
