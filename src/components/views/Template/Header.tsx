import "./styles/header.scss";

import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";

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
    <Box
      m={0}
      p={2}
      display="flex"
      flexDirection="row"
      style={{ backgroundColor: "white" }}
    >
      <Container maxWidth={BLOCK_SIZE.md}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Hidden smDown>
            <Grid item xs={2}>
              <a href="/" className="">
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Grid item>
                    <svg
                      height="30"
                      viewBox="0 0 500 500"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M111.02 54.95c4.73-13.92 9.11-27.95 14.08-41.78 3.08 1.26 3.81 4.76 5.31 7.4 38.74 77.58 77.54 155.14 116.27 232.73.86 1.78 2.05 3.36 3.32 4.87 2.01-2.22 3.41-4.88 4.68-7.57 37.95-76 75.92-151.99 113.91-227.98 1.71-3.22 2.92-6.79 5.43-9.51 1.39 1.11 1.97 2.82 2.53 4.44 34.23 103.05 68.61 206.05 102.93 309.07 5.05 16.14 10.48 32.16 15.84 48.2 1.01 2.98 2.25 5.88 3.52 8.75-19.49 9.8-38.37 20.78-56.62 32.72-15.73 10.23-30.62 21.73-44.4 34.46-1.24-1.39-2.24-2.98-2.56-4.83-11.77-46.96-23.67-93.89-35.48-140.85-2.07-7.48-3.4-15.19-6.05-22.5-1.04.95-2.09 1.93-2.7 3.23-31.46 62.95-62.9 125.93-94.38 188.88-1.91 3.59-3.35 7.48-5.76 10.78-2.15.77-2.79-1.58-3.66-2.99-31.75-63.53-63.47-127.07-95.23-190.6-1.57-3.01-2.78-6.27-4.94-8.93-1.64.51-1.77 2.38-2.24 3.76-12.92 51.67-26.07 103.28-39 154.95-.85 3.15-1.23 6.67-3.63 9.12-25.28-23.66-54.86-42.1-85-58.87-5.29-3.06-11.04-5.28-16.1-8.74 8.9-25.05 16.84-50.44 25.44-75.61 7.67-20.98 14.28-42.32 21.49-63.46 21-63.05 42.05-126.08 63-189.14z"></path>
                    </svg>
                  </Grid>
                  <Grid item>Monopoly One</Grid>
                </Grid>
              </a>
            </Grid>
          </Hidden>
          <Grid item sm={2}>
            <Button
              size={"small"}
              fullWidth={true}
              variant="contained"
              color="secondary"
              style={{ whiteSpace: "nowrap" }}
            >
              {t("Search games")}
            </Button>
          </Grid>
          <Grid item sm={6}>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Grid item>{t("M1TV")}</Grid>
              <Grid item>{t("Friends")}</Grid>
              <Grid item>{t("Inventory")}</Grid>
            </Grid>
          </Grid>
          <Grid item sm={2}>
            <Button
              variant="contained"
              color="secondary"
              style={{ whiteSpace: "nowrap" }}
            >
              {t("Login")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
