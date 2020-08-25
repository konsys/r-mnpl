import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RegularGameParams() {
  const { t } = useTranslation();
  return (
    <Grid container direction="column" spacing={GRID_SPACING}>
      <Grid item>
        <Typography variant="h6">{t("Regular game")}</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1} justify="space-between" direction="row">
          <Grid item>{t("Players")}</Grid>
          <Grid item>1</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={GRID_SPACING}>
          <Grid item>{t("Private game")}</Grid>
          <Grid item>1</Grid>
        </Grid>
        <Grid container justify="space-between" spacing={GRID_SPACING}>
          <Grid item>{t("Game autostart")}</Grid>
          <Grid item>2</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
