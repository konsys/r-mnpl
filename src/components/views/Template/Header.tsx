import { Box, Button, Container } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme/sizes";
import React from "react";

export default function Header() {
  return (
    <Box m={1} style={{ backgroundColor: "green" }}>
      <Container maxWidth={BLOCK_SIZE.lg} style={{ backgroundColor: "red" }}>
        <Button>11</Button>
      </Container>
    </Box>
  );
}
