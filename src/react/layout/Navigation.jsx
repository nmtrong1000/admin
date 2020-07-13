import React from "react";
import { Link } from "react-router-dom";

import css from "@assets/scss/layout/navigation.scss";

import Accordion from "@react/component/Accordion.jsx";
import Icon from "@react/component/Icon.jsx";

const ButtonLink = ( { link, parent } ) => {
  let content = (
    <>
      <span className={ css.gnav__icon }>
        { link.icon ? <Icon name={ link.icon } />: link.cap }
      </span>
      <span className={ css.gnav__txt }>
        { link.name }
      </span>
    </>
  );

  if( link.url ) {
    return <Link to={ link.url }>{ content }</Link>;
  }
  return <a className={ parent ? css.gnav__parent : "" }>{ content }</a>;
}

const Navigation = ( { links, toggle } ) => {
  let nav = links.map( ( link, idx ) => {
    if( link.childrens ) {
      let childs = link.childrens.map( ( child, idxx ) => {
        return(
          <li key={ idxx }>
            <ButtonLink link={ child } />
          </li>
        );
      } );
      return(
        <li key={ idx }>
          <Accordion btn={ <ButtonLink link={ link } parent /> }>
            <ul className={ css.gnav__sub }>
              { childs }
            </ul>
          </Accordion>
        </li>
      );
    }
    return(
      <li key={ idx }>
        <ButtonLink link={ link } />
      </li>
    );
  } );
  return(
    <nav className={ `${ css.gnav } ${ toggle ? css.gnav__min: "" }` }>
      <ul>
        { nav }
      </ul>
    </nav>
  );
};

export default Navigation;