import React, { useRef, useState } from "react";

import css from "@assets/scss/component/Accordion.scss";



const Accordion = ( { btn, children } ) => {
  const ref = useRef(),
        [active, setActive] = useState( false );

  function toggle() {
    setActive( !active );
    if( !active ) {
      ref.current.style.height = `${ ref.current.scrollHeight }px`;
    } else {
      ref.current.style.height = "";
    }
  }
  return(
    <div className={ css.accordion }>
      <div className={ css.accordion__btn } onClick={ toggle }>
        { btn }
      </div>
      <div className={ css.accordion__content } ref={ ref }>
        { children }
      </div>
    </div>
  );
};

export default Accordion;