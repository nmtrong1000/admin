import React from "react";

import css from "@assets/scss/component/FormGroup.scss";

const FormGroup = ( { label, hint, children } ) => {
  return (
    <div className={ css.form }>
      { label &&
        <label className={ css.form__label }>{ label }</label>
      }
      { children }
      { hint &&
        <span className={ css.form__hint }>{ hint }</span>
      }
    </div>
  );
};

export default FormGroup;