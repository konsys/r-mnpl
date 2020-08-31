import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import CreateGameModal, { RoomType } from "../CreatRoomModal/CreateGameModal";

import { BLOCK_SPACING } from "../../../../theme";
import React from "react";
import RoomAvatar from "./NewRoom/RoomAvatar";
import RoomTypeView from "./NewRoom/RoomTypeView";
import Template from "../../../views/Template/Template";
import { openModal } from "../../../../stores/Game/GameModalStore";
import { useTranslation } from "react-i18next";

export const FindGame = () => {
  const { t } = useTranslation();
  return (
    <div className="findGame">
      <CreateGameModal />

      <Template columns={2} title={"Find games"}>
        <Grid
          container
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
              direction="column"
              spacing={1}
              className="newRoomOne"
            >
              <Grid item className="newRoomOneParams">
                <RoomTypeView type={RoomType.REGULAR} />
              </Grid>
              <Grid item className="newRoomOnePlayers">
                <Grid container justify="center" direction="column" spacing={1}>
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
          </Grid>
        </Grid>
      </Template>
    </div>
  );
};
