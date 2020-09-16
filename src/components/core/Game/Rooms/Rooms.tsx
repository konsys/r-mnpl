import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  IRoomState,
  RoomStatus,
  myRooms$,
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
import { head } from "lodash";
import { openRoomModal } from "stores/Game/Rooms/RoomsModalModel";
import { useTranslation } from "react-i18next";
import { user$ } from "stores/Game/UserStore";

export const Rooms = () => {
  useGate(roomsGate);
  const myRooms = useStore(myRooms$);
  const rooms = useStore(rooms$);
  const { t } = useTranslation();
  const { userId } = useStore(user$);
  const myPendingRoom: IRoomState | undefined = myRooms.length
    ? (head(
        myRooms.filter((v) => v.roomStatus === RoomStatus.PENDING)
      ) as IRoomState)
    : undefined;

  const myPlayingRoom: IRoomState | undefined = myRooms.length
    ? (head(
        myRooms.filter((v) => v.roomStatus === RoomStatus.PLAYING)
      ) as IRoomState)
    : undefined;

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
                          iHaveRoom={myRooms.length > 0}
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
