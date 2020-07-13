import React, { memo } from "react";
import css from "@assets/scss/component/Input.scss";

const Textarea = ( { onChange, children } ) => {
  function handleBold( e ) {
    document.execCommand('bold', false, '');
  }
  return(
    <div className={ css.form__input }>
      <button onClick={ handleBold }>Bold</button>
      <div suppressContentEditableWarning={ true } contentEditable="true" onInput={ onChange }>
        { children }
      </div>
    </div>
  );
};
// const Textarea = memo(( props ) => {
//   function handleBold( e ) {
//     document.execCommand('bold', false, '');
//   }
//   return(
//     <div className={ css.form__input }>
//       <button onClick={ handleBold }>Bold</button>
//       <div suppressContentEditableWarning={true} contentEditable="true" onChange={ props.onChange }>
//         Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
//       </div>
//     </div>
//   );
// });

export default Textarea;