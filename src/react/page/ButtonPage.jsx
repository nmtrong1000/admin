import React from "react";

import FlexBox from "@react/component/FlexBox.jsx";
import Box from "@react/component/Box.jsx";
import Button from "@react/component/Button.jsx";

const ButtonPage = () => {
  return(
    <FlexBox align="center" wrap="wrap">
      <Box margin>
        <Button>Default</Button>
      </Box>
      <Box margin>
        <Button href="#">Link</Button>
      </Box>
      <Box margin>
        <Button disabled>Disabled</Button>
      </Box>
      <Box margin>
        <Button prepend="error">Prepend Icon</Button>
      </Box>
      <Box margin>
        <Button append="error">Append Icon</Button>
      </Box>
      <Box margin>
        <Button level="primary">Primary</Button>
      </Box>
      <Box margin>
        <Button level="secondary">Secondary</Button>
      </Box>
      <Box margin>
        <Button level="success">Success</Button>
      </Box>
      <Box margin>
        <Button level="danger">Danger</Button>
      </Box>
      <Box margin>
        <Button level="warning">Warning</Button>
      </Box>
      <Box margin>
        <Button level="info">Info</Button>
      </Box>
      <Box margin>
        <Button level="muted">Muted</Button>
      </Box>
      <Box margin>
        <Button prepend="google">Sign in with Google</Button>
      </Box>
      <Box margin>
        <Button prepend="youtube">Let's hack Youtube</Button>
      </Box>
      <Box margin>
        <Button prepend="facebook">Let's hack someone's Facebook</Button>
      </Box>
    </FlexBox>
  );
};

export default ButtonPage;