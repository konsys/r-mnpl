import { BLOCK_SIZE, GRID_SPACING } from "../../../theme";
import { Box, Card, CardContent, Container, Grid } from "@material-ui/core";

import React from "react";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function OneColumnContent({ children }: { children: any }) {
  return (
    <>
      <Box mx="auto" mt={GRID_SPACING}>
        <Container maxWidth={BLOCK_SIZE.md}>
          <Grid
            container
            justify="center"
            alignItems="flex-start"
            direction="row"
            spacing={GRID_SPACING}
          >
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>{children}</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
