import React from "react";

import FlexBox from "@react/component/FlexBox.jsx";
import Box from "@react/component/Box.jsx";
import Accordion from "@react/component/Accordion.jsx";

const Dashboard = ( props ) => {
  return(
    <section>
      <FlexBox align="center" wrap="wrap">
        <Box padding margin>
          Nothing to lose
        </Box>
        <Box padding margin>
          Nothing to lose
        </Box>
        <Accordion btn={ <Box padding>
            Nothing to lose
          </Box> }>
          <Box padding>
            Nothing to lose
          </Box>
        </Accordion>
      </FlexBox>
      
    </section>
  );
};

export default Dashboard;