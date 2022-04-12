
import React from 'react';

function PopupWithForm (props) {

    return (
      <div className={`popup popup_type_${props.selectorName} ${props.isOpened ? "popup_opened" : ""}`}>
        <form onSubmit={props.onSubmit} action="#" className={`popup__form popup__form_type_${props.selectorName}`} name={props.selectorName}>
          <h2 className="popup__form-header">{props.title}</h2>
          <fieldset className="popup__inputs">
            { props.children }
          </fieldset>
          <button className={`popup__submit-btn popup__submit-btn_type_${props.selectorName}`} type="submit">{props.btnText}</button>
          <button onClick={props.onClose} className={`popup__close-btn popup__close-btn_type_${props.selectorName}`} type="reset"></button>
        </form>
      </div>
    )
}

export default PopupWithForm;
