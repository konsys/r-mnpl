import { Grid, Typography } from "@material-ui/core";

import React from "react";
import { useTranslation } from "react-i18next";

export default function GameChat() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container>
        <Grid>
          <Typography variant="h6">{t("Chat")}</Typography>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </>
  );
}
