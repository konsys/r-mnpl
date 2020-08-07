import "./styles/header.scss";

import { Box, Button, Container, Grid } from "@material-ui/core";

import { BLOCK_SIZE } from "../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Header() {
  const { t } = useTranslation();
  return (
    <Box m={1} display="flex" flexDirection="row">
      <Container
        fixed
        maxWidth={BLOCK_SIZE.xl}
        style={{ border: "2px solid red", color: "red" }}
      >
        <Grid>logo</Grid>

        <Grid>
          <Button
            variant="contained"
            color="secondary"
            style={{ whiteSpace: "nowrap" }}
          >
            {t("Search games")}
          </Button>
        </Grid>

        <Grid>{t("M1TV")}</Grid>
        <Grid>{t("Friends")}</Grid>
        <Grid>{t("Inventory")}</Grid>
      </Container>
    </Box>
  );
}
