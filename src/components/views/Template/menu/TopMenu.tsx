import { Grid, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "./MobileMenu";
import { useTranslation } from "react-i18next";

export default function TopMenu() {
  const { t } = useTranslation();
  return (
    <>
      {Object.keys(menuItems).map((v: any, k: number) => (
        <Grid item key={k}>
          <Link to={menuItems[v]}>
            <Typography color={"textPrimary"}>{t(v)} </Typography>
          </Link>
        </Grid>
      ))}
    </>
  );
}
