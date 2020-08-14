import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../theme";
import React from "react";

export default function FriendsOnline() {
  return (
    <>
      <Grid container spacing={GRID_SPACING} justify="center">
        <Grid item>
          <Typography variant={"h6"}>Друзья онлайн</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body2"}>Нет друзей онлайн.</Typography>
        </Grid>
      </Grid>
    </>
  );
}
