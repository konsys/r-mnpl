import {
  IRoom,
  addPlayerToRoomFx,
  removePlayerFromRoomFx,
} from "stores/Game/Rooms/RoomsModel";

import { Grid } from "@material-ui/core";
import { IPlayer } from "types/types";
import React from "react";
import RoomAvatar from "./RoomAvatar";
import RoomTypeView from "./RoomTypeView";
import { concat } from "lodash";
import { openGameModal } from "stores/Game/GameModal/GameModalModel";
import { useTranslation } from "react-i18next";

export default function WaitingRoomsBlock({
  room,
  myRoomId,
  userId,
}: {
  room: IRoom;
  myRoomId: string | null;
  userId?: number;
}) {
  const g: IPlayer[] | null = room.players.length
    ? concat(
        room.players,
        new Array(room.playersNumber - room.players.length).fill(null)
      )
    : [];

  const { t } = useTranslation();

  const addPlayer = () => {
    return !myRoomId
      ? userId
        ? addPlayerToRoomFx({ roomId: room.roomId, userId })
        : openGameModal({
            text: t("Login to play"),
            title: t("You are not logged in"),
          })
      : openGameModal({
          text: t("You can`t join the room"),
          title: t("You are already waiting for game"),
        });
  };

  return (
    <Grid
      container
      justify="center"
      direction="column"
      spacing={1}
      className="newRoomOne"
    >
      <Grid item className="newRoomOneParams">
        <RoomTypeView room={room} />
      </Grid>
      <Grid item className="newRoomOnePlayers">
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          {g.map((v, k: number) => (
            <Grid key={k} item>
              <RoomAvatar
                avatar={(v && v.avatar) || ""}
                name={(v && v.name) || ""}
                addPlayer={addPlayer}
                removePlayer={
                  userId
                    ? (roomId: string) =>
                        removePlayerFromRoomFx({ roomId, userId })
                    : null
                }
                roomId={room.roomId}
                isMe={v ? userId === v.userId : false}
                myRoomId={myRoomId}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
