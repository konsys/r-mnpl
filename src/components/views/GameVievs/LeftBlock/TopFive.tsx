import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../theme";
import React from "react";

export default function TopFive() {
  return (
    <>
      <Grid container justify="center" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant={"h6"}>Друзья онлайн</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body2"}>Подробнее</Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant={"body2"}>Нет друзей онлайн.</Typography>
        </Grid>
      </Grid>
    </>
  );
}
