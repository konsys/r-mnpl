import {
  IRoomState,
  addPlayerToRoomFx,
  removePlayerFromRoomFx,
} from "stores/Game/Room/RoomStore";

import { Grid } from "@material-ui/core";
import { IPlayer } from "types/types";
import React from "react";
import RoomAvatar from "./RoomAvatar";
import RoomTypeView from "./RoomTypeView";
import { concat } from "lodash";
import { useStore } from "effector-react";
import { userStore } from "stores/Game/UserStore";

export default function RoomBlock({ room }: { room: IRoomState }) {
  const g: IPlayer[] | null = room.players.length
    ? concat(
        room.players,
        new Array(room.playersNumber - room.players.length).fill(null)
      )
    : [];
  const { userId } = useStore(userStore);

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
                  addPlayerToRoomFx({ roomId, userId })
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
