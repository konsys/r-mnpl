import {
  IRoomState,
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

export default function RoomBlock({
  room,
  iHaveRoom,
  userId,
}: {
  room: IRoomState;
  iHaveRoom: boolean;
  userId?: number;
}) {
  const g: IPlayer[] | null = room.players.length
    ? concat(
        room.players,
        new Array(room.playersNumber - room.players.length).fill(null)
      )
    : [];

  const { t } = useTranslation();

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
            <Grid key={k} item className="newRoomOneAvatar">
              <RoomAvatar
                avatar={(v && v.avatar) || ""}
                name={(v && v.name) || ""}
                addPlayer={(roomId: string) =>
                  !iHaveRoom
                    ? userId
                      ? addPlayerToRoomFx({ roomId, userId })
                      : openGameModal({
                          open: true,
                          text: t("Login to play"),
                          title: t("You are not logged in"),
                        })
                    : openGameModal({
                        open: true,
                        text: t("You can`t join the room"),
                        title: t("You are already waiting for game"),
                      })
                }
                removePlayer={(roomId: string) =>
                  userId && removePlayerFromRoomFx({ roomId, userId })
                }
                roomId={room.roomId}
                isMe={v ? userId === v.userId : false}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
