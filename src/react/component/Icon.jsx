import React from "react";

import css from "@assets/scss/component/icon.scss";

const icons = {
  "success": {
    src: require( "@assets/img/icon/Success.svg" ).default,
    fill: false,
  },
  "error": {
    src: require( "@assets/img/icon/Error.svg" ).default,
    fill: false,
  },
  "mail": {
    src: require( "@assets/img/icon/Mail.svg" ).default,
  },
  "hashtag": {
    src: require( "@assets/img/icon/Hashtag.svg" ).default,
  },
  "phone": {
    src: require( "@assets/img/icon/Phone.svg" ).default,
  },
  "url": {
    src: require( "@assets/img/icon/URL.svg" ).default,
    fill: false,
  },
  "lock": {
    src: require( "@assets/img/icon/Lock.svg" ).default,
    fill: false,
  },
  "search": {
    src: require( "@assets/img/icon/Search.svg" ).default,
    fill: false,
  },
  "google": {
    src: require( "@assets/img/icon/Google.svg" ).default,
    stroke: false,
  },
  "youtube": {
    src: require( "@assets/img/icon/Youtube.svg" ).default,
    stroke: false,
  },
  "facebook": {
    src: require( "@assets/img/icon/Facebook.svg" ).default,
    stroke: false,
  },
  "empty": {
    src: require( "@assets/img/icon/Empty.svg" ).default,
  },
};

const Icon = ( { name, width, height } ) => {
  let ico = icons[name] ?? icons["empty"],
      SVG = ico.src,
      cls = `${ css.icon } ${ ico.stroke === false ? css.icon__nostroke: "" } ${ ico.fill === false ? css.icon__nofill: "" }`;
  return(
    <SVG className={ cls } width={ width ?? 20 } height={ height ?? 20 } />
  );
};

export default Icon;