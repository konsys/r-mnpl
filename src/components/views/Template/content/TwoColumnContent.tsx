import { BLOCK_SIZE, GRID_SPACING } from "../../../../theme";
import { Box, Container, Grid } from "@material-ui/core";

import BuyGallery from "components/core/Game/BuyGallery/BuyGallery";
// import BuyGallery from "../../../core/Game/BuyGallery/BuyGallery";
import ContentBlock from "./ContentBlock";
import FriendsOnline from "../../GameVievs/LeftBlock/FriendsOnline";
import GameChat from "../../../core/Game/GameChat/GameChat";
import LeftBlock from "./LeftBlock";
import React from "react";
import { TemplateModules } from "types/types";
import TopFive from "../../GameVievs/LeftBlock/TopFive";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function TwoColumnContent({
  children,
  modules,
}: {
  children?: any[];
  modules: TemplateModules[];
}) {
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
              {modules.some((v) => v === TemplateModules.FRIENDS_ONLINE) && (
                <LeftBlock>
                  <FriendsOnline />
                </LeftBlock>
              )}
              {modules.some((v) => v === TemplateModules.TOP_FIVE) && (
                <LeftBlock>
                  <TopFive />
                </LeftBlock>
              )}
            </Grid>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              {modules.some((v) => v === TemplateModules.BUY_GALLERY) && (
                <ContentBlock>
                  <BuyGallery />
                </ContentBlock>
              )}
              {modules.some((v) => v === TemplateModules.GAME_CHAT) && (
                <ContentBlock>
                  <GameChat />
                </ContentBlock>
              )}
              <ContentBlock>{children}</ContentBlock>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
