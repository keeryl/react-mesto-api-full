import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description , setDescription ] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      selectorName="edit-profile"
      title="Редактировать профиль"
      btnText="Сохранить"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
        <input  className="popup__input popup__input_type_profile-name"
                onChange={handleNameChange}
                type="text"
                name="profileTitle"
                id="profileTitle"
                value={name || ''}
                maxLength="40"
                minLength="2"
                required/>
        <span className="popup__input-error" id="profileTitle-error"></span>
        <input className="popup__input popup__input_type_profile-description"
               onChange={handleDescriptionChange}
               type="text"
               name="profileDescription"
               id="profileDescription"
               value={description || ''}
               maxLength="200"
               minLength="2"
               required/>
        <span className="popup__input-error" id="profileDescription-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
