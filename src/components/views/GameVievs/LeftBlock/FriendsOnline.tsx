import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FriendsOnline() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container justify="center" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant={"h6"}>{t("Friends online")}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant={"body2"}>{t("No friends online")}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
