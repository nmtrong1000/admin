import React from "react";

import css from "@assets/scss/component/Button.scss";

import Icon from "@react/component/Icon.jsx";
import { Link } from "react-router-dom";

const Button = ( { children, className, append, prepend, href, level, onClick, disabled } ) => {
  let cls = `${ css.button } ${ className ?? "" }`;
  switch( level ) {
    case "primary":
      cls += ` ${ css.button__primary }`;
      break;
    case "secondary":
      cls += ` ${ css.button__secondary }`;
      break;
    case "success":
      cls += ` ${ css.button__success }`;
      break;
    case "danger":
      cls += ` ${ css.button__danger }`;
      break;
    case "warning":
      cls += ` ${ css.button__warning }`;
      break;
    case "info":
      cls += ` ${ css.button__info }`;
      break;
    case "muted":
      cls += ` ${ css.button__muted }`;
      break;
    default:
      cls += ` ${ css.button__default }`;
      break;
  }
  cls += disabled ? ` ${ css.button__disabled }`: "";
  let innerHTML = (
    <>
      { prepend &&
        <span className={ css.button__prepend }>
          <Icon name={ prepend } />
        </span>
      }
      { children }
      { append &&
        <span className={ css.button__append }>
          <Icon name={ append } />
        </span>
      }
    </>
  );
  if( href ) {
    return <Link className={ cls } to={ href }>{ innerHTML }</Link>
  }
  return (
    <button 
      className={ cls } 
      onClick={ onClick } 
      disabled={ disabled }>
      { innerHTML }
    </button>
  );
};

export default Button;