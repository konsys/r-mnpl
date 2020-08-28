import { Button, Divider, Grid, Typography } from "@material-ui/core";

import CreateGameModal from "./CreateGameModal";
import React from "react";
import Template from "../../../views/Template/Template";
import { openModal } from "../../../../stores/Game/GameModalStore";
import { useTranslation } from "react-i18next";

export const FindGames = () => {
  const { t } = useTranslation();
  return (
    <>
      <CreateGameModal />
      <Template columns={2} title={"Find games"}>
        <Grid
          container
          alignItems="stretch"
          justify="space-between"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h6">{t("Waiting for games")}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => openModal()}
              >
                {t("Create game")}
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          alignItems="stretch"
          justify="space-between"
          spacing={1}
        >
          <Grid item>111</Grid>
        </Grid>
      </Template>
    </>
  );
};
