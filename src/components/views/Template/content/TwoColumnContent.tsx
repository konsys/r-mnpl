import { BLOCK_SIZE, GRID_SPACING } from "../../../../theme";
import { Box, Container, Grid } from "@material-ui/core";

import BuyGallery from "../../GameVievs/BuyGallery";
import FriendsOnline from "../../GameVievs/LeftBlock/FriendsOnline";
import LeftBlock from "./LeftBlock";
import React from "react";
import RightBlock from "./RightBlock";
import TopFive from "../../GameVievs/LeftBlock/TopFive";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function TwoColumnContent({ children }: { children?: any[] }) {
  return (
    <Box
      m={0}
      p={GRID_SPACING}
      display="flex"
      flexDirection="row"
      className="games-template"
    >
      <Container maxWidth={BLOCK_SIZE.md}>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="row"
          spacing={GRID_SPACING}
        >
          <Grid item md={4} sm={12} xs={12}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              <LeftBlock>
                <FriendsOnline />
              </LeftBlock>
              <LeftBlock>
                <TopFive />
              </LeftBlock>
            </Grid>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              <RightBlock>
                <BuyGallery />
              </RightBlock>
              <RightBlock>{children}</RightBlock>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
