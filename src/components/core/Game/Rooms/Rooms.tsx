import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  isWaitingForGame,
  roomsGate,
  roomsStore,
} from "stores/Game/Room/RoomStore";
import { useGate, useStore } from "effector-react";

import { BLOCK_SPACING } from "../../../../theme";
import CreateRoomModal from "../CreatRoomModal/CreateRoomModal";
import NewRoomBlock from "./NewRoom/NewRoomBlock";
import React from "react";
import Template from "../../../views/Template/Template";
import { openRoomModal } from "stores/Game/Room/RoomModalStore";
import { useTranslation } from "react-i18next";

export const Rooms = () => {
  useGate(roomsGate);
  const rooms = useStore(roomsStore);
  const waitingGame = useStore(isWaitingForGame);
  const { t } = useTranslation();

  console.log(123123123123, rooms);
  return (
    <div className="findGame">
      <CreateRoomModal />

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
                onClick={() => openRoomModal()}
                disabled={waitingGame}
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
          {Array.isArray(rooms) &&
            rooms.rooms.map((room, k) => (
              <Grid item key={k}>
                <NewRoomBlock room={room} />
              </Grid>
            ))}
        </Grid>
      </Template>
    </div>
  );
};
