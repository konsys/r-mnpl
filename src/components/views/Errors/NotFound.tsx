import { Button, Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../theme";
import { Helmet } from "react-helmet";
import { ReactComponent as NotFoundIcon } from "../../../theme/svg/404.svg";
import React from "react";
import Template from "../Template/Template";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  const component = (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={GRID_SPACING}
    >
      <Grid item style={{ height: "200px", width: "500px" }}>
        <NotFoundIcon />
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          {t("Page not found")}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          {t("This page doesn`t exist yet")}
        </Typography>
      </Grid>
      <Grid item>
        <Button size={"medium"} variant="contained" color="primary">
          <Typography variant="body2" noWrap>
            {t("To main page")}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
  return (
    <>
      <Helmet>
        <title>{t("Page not found")}</title>
      </Helmet>
      <Template columns={1}>{component}</Template>
    </>
  );
}
