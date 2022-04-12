import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Card (props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteBtnClassName = (
    `card__delete-btn ${isOwn ? 'card__delete-btn_visible' : 'card__delete-btn_hidden'}`
  );
  const cardLikeBtnClassName = (
    `card__like-btn ${isLiked && 'card__like-btn_active'}`
  );

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  const handleDeleteClick = () => {
    props.onCardDeleteClick(props.card);
  }

    return (
      <li className="card">
      <img onClick={handleCardClick} className="card__image" src={props.card.link} alt={`Картинка места: ${props.card.name}`}/>
      <div className="card__label">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className={cardLikeBtnClassName} onClick={handleLikeClick} type="button"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteBtnClassName} onClick={handleDeleteClick} type="button"></button>
    </li>
    )
}

export default Card;
