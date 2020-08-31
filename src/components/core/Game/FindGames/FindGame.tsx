import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { BLOCK_SPACING } from "../../../../theme";
import CreateGameModal from "../CreatRoomModal/CreateGameModal";
import React from "react";
import RoomAvatar from "./NewRoom/RoomAvatar";
import RoomTypeView from "./NewRoom/RoomTypeView";
import Template from "../../../views/Template/Template";
import { newRoomStore } from "stores/Game/NewRoomStore";
import { openModal } from "../../../../stores/Game/GameModalStore";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export const roomSwitchChange = (name: string) => {
  console.log(234234234, name);
};

export const FindGame = () => {
  const room = useStore(newRoomStore);

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
                <RoomTypeView type={room.roomType} roomParams={room} />
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
