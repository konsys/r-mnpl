import {
  IRoomState,
  addPlayerToRoomFx,
  newRoomStore,
  removePlayerFromRoomFx,
} from "stores/Game/Rooms/RoomsStore";

import { Grid } from "@material-ui/core";
import { IPlayer } from "types/types";
import React from "react";
import RoomAvatar from "./RoomAvatar";
import RoomTypeView from "./RoomTypeView";
import { concat } from "lodash";
import { openGameModal } from "stores/Game/GameModal/GameModalStore";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";
import { userStore } from "stores/Game/UserStore";

export default function RoomBlock({ room }: { room: IRoomState }) {
  const g: IPlayer[] | null = room.players.length
    ? concat(
        room.players,
        new Array(room.playersNumber - room.players.length).fill(null)
      )
    : [];
  const { userId } = useStore(userStore);
  const { creatorId } = useStore(newRoomStore);
  const iHaveRoom = userId === creatorId;
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
          spacing={2}
        >
          {g.map((v, k: number) => (
            <Grid key={k} item className="newRoomOneAvatar">
              <RoomAvatar
                avatar={(v && v.avatar) || ""}
                name={(v && v.name) || ""}
                addPlayer={(roomId: string) =>
                  iHaveRoom
                    ? addPlayerToRoomFx({ roomId, userId })
                    : openGameModal({
                        open: true,
                        text: t("You can`t join the room"),
                        title: t("You are already waiting game"),
                      })
                }
                removePlayer={(roomId: string) =>
                  removePlayerFromRoomFx({ roomId, userId })
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
