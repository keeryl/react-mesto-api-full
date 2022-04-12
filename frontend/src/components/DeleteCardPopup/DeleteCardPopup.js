import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function DeleteCardPopup(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCardDelete(props.card);
  }

  return (
    <PopupWithForm
      selectorName="delete-card"
      title="Вы уверены?"
      btnText="Да"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  );
}

export default  DeleteCardPopup;
