import React from "react";

import css from "@assets/scss/component/Box.scss";

const Box = ( { children, margin, padding, customMargin, customPadding, className, width, height } ) => {
  let cls = `${ css.box } ${ className ?? "" }`, 
      style = {
        width: width,
        height: height,
      };
  if( customMargin ) {
    style.margin = customMargin;
  } else if( margin ) {
    switch( margin ) {
      case "medium":
        cls += ` ${ css.box__margin__medium }`;
        break;
      case "small":
        cls += ` ${ css.box__margin__small }`;
        break;
      default:
        cls += ` ${ css.box__margin__regular }`;
    }
  }
  if( customPadding ) {
    style.padding = customPadding;
  } else if( padding ) {
    switch( padding ) {
      case "medium":
        cls += ` ${ css.box__padding__medium }`;
        break;
      case "small":
        cls += ` ${ css.box__padding__small }`;
        break;
      default:
        cls += ` ${ css.box__padding__regular }`;
    }
  }
  
  return(
    <div className={ cls } style={ style }>
      { children }
    </div>
  );
};

export default Box;