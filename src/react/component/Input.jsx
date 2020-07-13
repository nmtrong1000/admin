import React, { useState } from "react";

import Icon from "@react/component/Icon.jsx";
import classNames from "classnames/bind";

import css from "@assets/scss/component/Input.scss";

let cx = classNames.bind( css );

const Input = ( { icon, success, error, type, name, defaultValue, placeholder, disabled, value, onChange } ) => {
  const [focus, setFocus] = useState( false );
  let cls = cx( {
    "input": true,
    "input__success": success,
    "input__error": error,
    "input__focus": focus,
  } );

  return(
    <div className={ cls }>
      { icon &&
        <span className={ css.input__icon }>
          <Icon name={ icon } />
        </span>
      }
      <input type={ type } 
             name={ name } 
             defaultValue={ defaultValue } 
             value={ value }
             placeholder={ placeholder }
             onFocus={ e => setFocus( true ) }
             onBlur={ e => setFocus( false ) }
             disabled={ disabled }
             onChange={ onChange } />
      { success &&
        <span className={ css.input__validator }>
          <Icon name="success" />
        </span>
      }
      { error &&
        <span className={ css.input__validator }>
          <Icon name="error" />
        </span>
      }
    </div>
  );
};

export default Input;