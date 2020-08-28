import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { BLOCK_SPACING } from "../../../../theme";
import CreateGameModal from "./CreateGameModal";
import React from "react";
import RoomAvatar from "./GameParams/views/RoomAvatar";
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
          spacing={BLOCK_SPACING}
          direction="row"
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
        <Grid
          container
          justify="center"
          direction="column"
          spacing={BLOCK_SPACING}
        >
          <Grid item>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          direction="column"
          spacing={BLOCK_SPACING}
        >
          <Grid item>
            <Grid
              container
              justify="center"
              direction="row"
              spacing={BLOCK_SPACING}
              className="newRoomOne"
            >
              <Grid className="newRoomOneAvatar">
                <RoomAvatar />
              </Grid>
              <Grid className="newRoomOneAvatar">
                <RoomAvatar />
              </Grid>
              <Grid className="newRoomOneAvatar">
                <RoomAvatar />
              </Grid>
              <Grid className="newRoomOneAvatar">
                <RoomAvatar />
              </Grid>
              <Grid className="newRoomOneAvatar">
                <RoomAvatar />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Template>
    </>
  );
};
