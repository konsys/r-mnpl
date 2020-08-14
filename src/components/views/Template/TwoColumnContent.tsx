import { BLOCK_SIZE, GRID_SPACING } from "../../../theme";
import { Box, Card, CardContent, Container, Grid } from "@material-ui/core";

import BuyGallery from "../GameVievs/BuyGallery";
import React from "react";

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
      <Container maxWidth={BLOCK_SIZE.lg}>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="row"
          spacing={GRID_SPACING}
        >
          {children && (
            <Grid item md={4} sm={12} xs={12}>
              <Grid container direction="column" spacing={GRID_SPACING}>
                <Grid item>
                  <Card variant="outlined">
                    <CardContent>left</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item md={8} sm={12} xs={12}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <BuyGallery />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>{children}</CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
