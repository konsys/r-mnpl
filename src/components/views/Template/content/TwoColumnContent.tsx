import { BLOCK_SIZE, GRID_SPACING } from "../../../../theme";
import { Box, Container, Grid } from "@material-ui/core";

import BuyGallery from "../../../core/Game/BuyGallery/BuyGallery";
import ContentBlock from "./ContentBlock";
import FriendsOnline from "../../GameVievs/LeftBlock/FriendsOnline";
import GameChat from "../../../core/Game/GameChat/GameChat";
import LeftBlock from "./LeftBlock";
import React from "react";
import TopFive from "../../GameVievs/LeftBlock/TopFive";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function TwoColumnContent({ children }: { children?: any[] }) {
  return (
    <Box
      mt={GRID_SPACING}
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
              <ContentBlock>
                <BuyGallery />
              </ContentBlock>
              <ContentBlock>
                <GameChat />
              </ContentBlock>
              <ContentBlock>{children}</ContentBlock>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
