import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function AddPlacePopup(props) {

  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setTitle('');
    setUrl('');
  }, [props.isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddCard(title, url);
  }

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  }

  const handleUrlInput = (event) => {
    setUrl(event.target.value);
  }


  return (
    <PopupWithForm
      selectorName="add-card"
      title="Новое место"
      btnText="Создать"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleTitleInput}
        value={title || ''}
        className="popup__input popup__input_type_card-name"
        type="text"
        name="cardName"
        id="cardName"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error" id="cardName-error"></span>
      <input
        onChange={handleUrlInput}
        value={url || ''}
        className="popup__input popup__input_type_img-link"
        type="url"
        name="imgLink"
        id="imgLink"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="imgLink-error"></span>
    </PopupWithForm>
  );
}

export default  AddPlacePopup;






