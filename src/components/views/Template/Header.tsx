import "./styles/header.scss";

import { Box, Button, Container, Grid } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme";
import React from "react";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Header() {
  return (
    <Box m={1} display="flex" flexDirection="row">
      <Container
        maxWidth={BLOCK_SIZE.lg}
        style={{ border: "2px solid red", color: "red" }}
      >
        <Grid>logo</Grid>

        <Grid>
          <Button variant="contained" color="secondary">
            Поиск игр
          </Button>
        </Grid>

        <Grid>11</Grid>
      </Container>
    </Box>
  );
}
