import React from "react";

import css from "@assets/scss/component/FlexBox.scss";

const FlexBox = ( { children, justify, align, wrap, direction } ) => {
  let style = {
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    flexDirection: direction,
  };
  return(
    <div className={ css.flex } style={ style }>
      { children }
    </div>
  );
};

export default FlexBox;