import { Container, Grid, Paper } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme";
import React from "react";

export default function Content() {
  return (
    <Container maxWidth={BLOCK_SIZE.md}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="row"
        spacing={2}
      ></Grid>
      <Paper elevation={0}>1</Paper>
      <Paper elevation={1}>2</Paper>
      <Paper elevation={2}>3</Paper>
    </Container>
  );
}
