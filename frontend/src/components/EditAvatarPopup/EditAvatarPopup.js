import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup(props) {

  const urlInput = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateAvatar(urlInput.current.value);
    urlInput.current.value = '';
  }

  return (
    <PopupWithForm
      selectorName="edit-avatar"
      title="Обновить аватар"
      btnText="Сохранить"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
        <input className="popup__input popup__input_type_img-link"
               ref={urlInput}
               type="url"
               name="avatarLink"
               id="avatarLink"
               placeholder="Ссылка на аватар"
               required />
        <span className="popup__input-error" id="avatarLink-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
