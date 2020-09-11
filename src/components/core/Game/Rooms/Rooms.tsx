import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  RoomStatus,
  isWaitingForGameIndex,
  roomsGate,
  roomsStore,
} from "stores/Game/Rooms/RoomsStore";
import { useGate, useStore } from "effector-react";

import { BLOCK_SPACING } from "../../../../theme";
import CreateRoomModal from "../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Redirect } from "react-router-dom";
import RoomBlock from "./RoomBlock/RoomBlock";
import Template from "../../../views/Template/Template";
import { openRoomModal } from "stores/Game/Rooms/RoomsModalStore";
import { useTranslation } from "react-i18next";
import { userStore } from "stores/Game/UserStore";

export const Rooms = () => {
  useGate(roomsGate);
  const rooms = useStore(roomsStore);
  const waitingGameIndex = useStore(isWaitingForGameIndex);
  const { t } = useTranslation();
  const { userId } = useStore(userStore);
  const myRoom = rooms.rooms[waitingGameIndex];

  console.log(234234234, waitingGameIndex);

  console.log(1111, myRoom);

  return (
    <>
      {myRoom && myRoom.roomStatus === RoomStatus.STARTED ? (
        <Redirect
          to={{
            pathname: `/board/${myRoom.roomId}`,
            search: "?utm=your+face",
          }}
        />
      ) : (
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
                    disabled={waitingGameIndex > -1}
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
                          iHaveRoom={waitingGameIndex > -1}
                        />
                      </Grid>
                    )
                )}
            </Grid>
          </Template>
        </div>
      )}
    </>
  );
};
