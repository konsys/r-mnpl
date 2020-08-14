import { Card, CardContent, Grid } from "@material-ui/core";

import { GRID_SPACING } from "../../../../theme";
import React from "react";

export default function LeftBlock({ children }: { children: any }) {
  return (
    <>
      <Grid item md={4} sm={12} xs={12}>
        <Grid container direction="column" spacing={GRID_SPACING}>
          <Grid item>
            <Card variant="outlined">
              <CardContent>{children}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
