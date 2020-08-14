import { BLOCK_SIZE, GRID_SPACING } from "../../../theme";
import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";

import Logo from "./logo/Logo";
import MobileMenu from "./menu/MobileMenu";
import React from "react";
import TopMenu from "./menu/TopMenu";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Header() {
  const { t } = useTranslation();

  const history = useHistory();
  return (
    <Box
      m={0}
      p={1}
      display="flex"
      flexDirection="row"
      style={{ backgroundColor: "white" }}
      className="games-template"
    >
      <Container maxWidth={BLOCK_SIZE.md}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <Hidden smDown>
            <Grid item md={3}>
              <Logo />
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid item sm={4} xs={2} className="top-menu">
              <MobileMenu />
            </Grid>
          </Hidden>

          <Grid item md={2} sm={4} xs={5}>
            <Button
              size={"small"}
              variant="outlined"
              color="primary"
              style={{ whiteSpace: "nowrap" }}
              onClick={() => history.push("games")}
            >
              {t("Search games")}
            </Button>
          </Grid>

          <Hidden smDown>
            <Grid item md={5}>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
                spacing={GRID_SPACING}
              >
                <TopMenu />
              </Grid>
            </Grid>
          </Hidden>

          <Grid item md={2} sm={4} xs={5}>
            <Grid container justify="flex-end">
              <Button
                variant="outlined"
                color="primary"
                size={"small"}
                onClick={() => history.push("login")}
              >
                {t("Login")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
