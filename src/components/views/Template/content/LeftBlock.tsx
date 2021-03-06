import { Card, CardContent, Grid } from "@material-ui/core";

import React from "react";

export default function LeftBlock({ children }: { children: any }) {
  return (
    <>
      <Grid item>
        <Card variant="outlined">
          <CardContent>{children}</CardContent>
        </Card>
      </Grid>
    </>
  );
}
