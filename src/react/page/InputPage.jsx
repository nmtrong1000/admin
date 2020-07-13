import React from "react";

import FlexBox from "@react/component/FlexBox.jsx";
import Box from "@react/component/Box.jsx";
import Input from "@react/component/Input.jsx";
import Textarea from "@react/component/TextArea.jsx";
import FormGroup from "@react/component/FormGroup.jsx";

const TextInputPage = () => {
  function getHTML( e ) {
    console.log( e.target.innerHTML );
  }
  return(
    <Box padding>
      <FormGroup label="Default" hint="This is a hint message">
        <Input placeholder="Default" type="text" />
      </FormGroup>
      <FormGroup label="With Icon">
        <Input placeholder="With Icon" type="text" icon="success" />
      </FormGroup>
      <FormGroup label="Success">
        <Input success placeholder="Success" type="text" />
      </FormGroup>
      <FormGroup label="Error">
        <Input error placeholder="Error" type="text" />
      </FormGroup>
      <FormGroup label="Default Value">
        <Input defaultValue="Default Value" type="text" />
      </FormGroup>
      <FormGroup label="Disabled">
        <Input defaultValue="Disabled" type="text" disabled />
      </FormGroup>
      <FormGroup label="Email">
        <Input placeholder="Email" type="email" icon="mail" />
      </FormGroup>
      <FormGroup label="Number">
        <Input placeholder="Number" type="number" icon="hashtag" />
      </FormGroup>
      <FormGroup label="Phone">
        <Input placeholder="Phone" type="phone" icon="phone" />
      </FormGroup>
      <FormGroup label="URL">
        <Input placeholder="URL" type="url" icon="url" />
      </FormGroup>
      <FormGroup label="Password">
        <Input placeholder="Password" type="password" icon="lock" />
      </FormGroup>
      <FormGroup label="Search">
        <Input placeholder="Search" type="search" icon="search" />
      </FormGroup>
      <Textarea onChange={ getHTML }>
        <strong>test</strong>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </Textarea>
    </Box>
  );
};

export default TextInputPage;