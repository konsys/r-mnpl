import "./styles/header.scss";

import { Button, Container, Grid, Hidden } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme";
import Logo from "./logo/Logo";
import MobileMenu from "./menu/MobileMenu";
import React from "react";
import TopMenu from "./menu/TopMenu";
import { useTranslation } from "react-i18next";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Header() {
  const { t } = useTranslation();
  return (
    <Container maxWidth={BLOCK_SIZE.md}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Hidden smUp>
          <Grid item sm={2}>
            <MobileMenu />
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item sm={2}>
            <a href="/" className="">
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
                spacing={2}
              >
                <Logo />
              </Grid>
            </a>
          </Grid>
        </Hidden>
        <Grid item xs={3} sm={2}>
          <Button
            size={"small"}
            fullWidth={true}
            variant="contained"
            color="primary"
            style={{ whiteSpace: "nowrap" }}
          >
            {t("Search games")}
          </Button>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={6}>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <TopMenu />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            style={{ whiteSpace: "nowrap" }}
          >
            {t("Login")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
