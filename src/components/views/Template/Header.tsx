import "./styles/header.scss";

import { Box, Button, Container } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme/sizes";
import React from "react";

export default function Header() {
  return (
    <Box m={1}>
      <Container maxWidth={BLOCK_SIZE.lg}>
        <div className="wrapper">
          <Button>11</Button>
        </div>
      </Container>
    </Box>
  );
}
