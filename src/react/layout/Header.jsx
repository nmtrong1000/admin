import React from "react";
import { Link } from "react-router-dom";

import css from "@assets/scss/layout/header.scss";

import Logo from "@assets/img/logo.png";

const Header = ( { toggle } ) => {
  return(
    <header className={ css.header }>
      <Link to="/" className={ `${ css.header__logo } ${ toggle ? css.header__logo__min: "" }` }>
        <img src={ Logo } alt="Pornhub"/>
      </Link>
    </header>
  );
};

export default Header;