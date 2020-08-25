import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RegularGameParams() {
  const { t } = useTranslation();
  return (
    <Grid
      container
      justify="flex-start"
      direction="column"
      spacing={GRID_SPACING}
    >
      <Grid item style={{ border: "2px solid red" }}>
        <Typography variant="h6">{t("Regular game")}</Typography>
      </Grid>
      <Grid item style={{ border: "2px solid green" }}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={1}>
          <Grid item>{t("Private game")}</Grid>
          <Grid item>1</Grid>
        </Grid>
        <Grid container justify="space-between" spacing={1}>
          <Grid item>{t("Game autostart")}</Grid>
          <Grid item>2</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
