import { BLOCK_SIZE, GRID_SPACING } from "../../../theme";
import { Box, Container, Grid } from "@material-ui/core";

import React from "react";

export default function Footer() {
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
          justify="flex-start"
          alignItems="center"
          direction="row"
          spacing={GRID_SPACING}
        >
          <Grid item>footer</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
