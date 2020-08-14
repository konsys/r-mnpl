import { BLOCK_SIZE, GRID_SPACING } from "../../../theme";
import { Box, Card, CardContent, Container, Grid } from "@material-ui/core";

import React from "react";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Content({
  leftBlocks,
  centerBlocks,
}: {
  leftBlocks: any[];
  centerBlocks: any[];
}) {
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
          alignItems="center"
          direction="row"
          spacing={GRID_SPACING}
        >
          <Grid item md={4} spacing={10}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              {leftBlocks.map((v) => (
                <Grid item>
                  <Card variant="outlined">
                    <CardContent>{v}</CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item md={8}>
            <Grid container direction="column" spacing={GRID_SPACING}>
              {centerBlocks.map((v) => (
                <Grid item>
                  <Card variant="outlined">
                    <CardContent>{v}</CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
