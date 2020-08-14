import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TopFive() {
  const { t } = useTranslation();
  return (
    <>
      <Grid
        container
        justify="center"
        spacing={GRID_SPACING}
        alignContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant={"h6"}>{t("Week top")}</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body2"}>{t("More")}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-start" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant={"body2"}>
            {t("You are not in Top Five")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
