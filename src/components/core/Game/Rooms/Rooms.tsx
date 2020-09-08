import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  RoomStatus,
  isWaitingForGame,
  roomsGate,
  roomsStore,
} from "stores/Game/Rooms/RoomsStore";
import { useGate, useStore } from "effector-react";

import { BLOCK_SPACING } from "../../../../theme";
import CreateRoomModal from "../CreateRoomModal/CreateRoomModal";
import React from "react";
import RoomBlock from "./RoomBlock/RoomBlock";
import Template from "../../../views/Template/Template";
import { openRoomModal } from "stores/Game/Rooms/RoomsModalStore";
import { useTranslation } from "react-i18next";
import { userStore } from "stores/Game/UserStore";

export const Rooms = () => {
  useGate(roomsGate);
  const rooms = useStore(roomsStore);
  const waitingGame = useStore(isWaitingForGame);
  const { t } = useTranslation();
  const { userId } = useStore(userStore);

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
                {t("Create room")}
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
          {rooms &&
            Array.isArray(rooms.rooms) &&
            rooms.rooms.map(
              (room, k) =>
                room.roomStatus === RoomStatus.PENDING && (
                  <Grid item key={k}>
                    <RoomBlock
                      room={room}
                      userId={userId}
                      iHaveRoom={waitingGame}
                    />
                  </Grid>
                )
            )}
        </Grid>
      </Template>
    </div>
  );
};
