import React from 'react';
import successImage from '../../blocks/popup/images/successImage.svg';
import failImage from '../../blocks/popup/images/failImage.svg';

function InfoTooltip (props) {

  const handleCloseTooltip = () => {
    props.onClose();
  }

  return(
    <div className={`popup popup_type_edit-profile ${props.isOpened ? "popup_opened" : ""}`}>
      <div className="popup__auth-container">
      <img
        className="popup__auth-img"
        src={props.isRegistrationSuccessful
          ? successImage
          : failImage}
        alt={props.isRegistrationSuccessful
          ? "Вы успешно зарегистрировались"
          : "Что-то пошло не так! Попробуйте еще раз."}>
      </img>
      <p className="popup__auth-message">
        {props.isRegistrationSuccessful
          ? "Вы успешно зарегистрировались"
          : "Что-то пошло не так! Попробуйте еще раз."}
      </p>
      <button onClick={handleCloseTooltip} className="popup__close-btn" type="button"></button>
      </div>
    </div>
  )

}

export default InfoTooltip;
