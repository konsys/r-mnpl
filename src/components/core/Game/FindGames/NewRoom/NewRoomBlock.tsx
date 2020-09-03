import { Grid } from "@material-ui/core";
import { IRoomState } from "stores/Game/Room/NewRoomStore";
import React from "react";
import RoomAvatar from "./RoomAvatar";
import RoomTypeView from "./RoomTypeView";
import { concat } from "lodash";

export default function NewRoomBlock({ room }: { room: IRoomState }) {
  const g = concat(
    room.players,
    new Array(room.playersNumber - room.players.length).fill(null)
  );
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
        <Grid container justify="flex-start" direction="row" spacing={2}>
          {g.map((v, k: number) => (
            <Grid key={k} item className="newRoomOneAvatar">
              <RoomAvatar
                avatar={(v && v.avatar) || ""}
                name={(v && v.name) || ""}
                onClick={(n) => console.log(22222, n)}
                roomId={room.roomId}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
