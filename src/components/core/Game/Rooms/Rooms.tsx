import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  PlayerRoomStatus,
  RoomStatus,
  myPendingRoom$,
  rooms$,
  roomsGate,
} from "stores/Game/Rooms/RoomsModel";
import { useGate, useStore } from "effector-react";

import { BLOCK_SPACING } from "../../../../theme";
import CreateRoomModal from "../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Redirect } from "react-router-dom";
import RoomBlock from "./RoomBlock/RoomBlock";
import Template from "../../../views/Template/Template";
import { openRoomModal } from "stores/Game/Rooms/RoomsModalModel";
import { useTranslation } from "react-i18next";
import { user$ } from "stores/Game/UserStore";

export const Rooms = () => {
  useGate(roomsGate);
  const myPendingRoom = useStore(myPendingRoom$);
  const rooms = useStore(rooms$);
  const { t } = useTranslation();
  const { userId } = useStore(user$);

  const playingRooms = rooms.rooms.filter(
    (v) => v.roomStatus === RoomStatus.PLAYING
  );

  console.log(234234234, rooms.rooms);
  const myPlayingRoom = playingRooms.find((v) =>
    v.players.some(
      (v1) =>
        v1?.userId === userId && v1.playerRoomStatus === PlayerRoomStatus.ACITVE
    )
  );
  console.log(1111, myPlayingRoom);
  return (
    <>
      <CreateRoomModal />
      {myPlayingRoom ? (
        <Redirect
          to={{
            pathname: `/board/${myPlayingRoom.roomId}`,
          }}
        />
      ) : (
        <div className="findGame">
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
                    disabled={!!myPendingRoom}
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
                          iHaveRoom={!!myPendingRoom}
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
