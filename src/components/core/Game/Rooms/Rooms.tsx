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

import { BLOCK_SPACING } from "theme";
import CreateRoomModal from "../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Redirect } from "react-router-dom";
import Template from "components/views/Template/Template";
import { TemplateModules } from "types/types";
import { openRoomModal } from "stores/Game/Rooms/RoomsModalModel";
import { useTranslation } from "react-i18next";
import { user$ } from "stores/Game/User/UserModel";
import WaitingRoomsBlock from "./RoomBlock/WaitingRoomsBlock";

export const Rooms = () => {
  useGate(roomsGate);
  // TODO test pending rooms
  const myPendingRoom = useStore(myPendingRoom$);
  const rooms = useStore(rooms$);
  const { t } = useTranslation();
  const user = useStore(user$);
  const userId = user && user.userId;

  const playingRooms = rooms.rooms.filter(
    (v) => v.roomStatus === RoomStatus.PLAYING
  );

  const myPlayingRoom = playingRooms.find((v) =>
    v.players.some(
      (v1) =>
        v1?.userId === userId && v1.playerRoomStatus === PlayerRoomStatus.ACITVE
    )
  );

  const notMyRooms = rooms.rooms.filter(
    (v) => myPendingRoom && myPendingRoom.roomId !== v.roomId
  );

  const myRoom = rooms.rooms.find(
    (v) => myPendingRoom && myPendingRoom.roomId === v.roomId
  );

  console.log(1111111111, myRoom);
  console.log(222222222222, notMyRooms);
  const sortedRooms = myRoom ? [myRoom].concat(notMyRooms) : rooms.rooms;
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
          <Template
            columns={2}
            title={"Search games"}
            modules={[
              TemplateModules.FRIENDS_ONLINE,
              TemplateModules.TOP_FIVE,
              TemplateModules.BUY_GALLERY,
              TemplateModules.GAME_CHAT,
            ]}
          >
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
                    disabled={!!myPendingRoom || !user}
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
              {sortedRooms &&
                rooms.rooms.map(
                  (room, k) =>
                    room.roomStatus === RoomStatus.PENDING && (
                      <Grid item key={k}>
                        <WaitingRoomsBlock
                          room={room}
                          myRoomId={
                            !!myPendingRoom ? myPendingRoom.roomId : null
                          }
                          userId={userId || undefined}
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
