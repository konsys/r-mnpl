import { Grid } from "@material-ui/core";
import { IRoomState } from "stores/Game/models/NewRoomStore";
import React from "react";
import RoomAvatar from "./RoomAvatar";
import RoomTypeView from "./RoomTypeView";

export default function NewRoomBlock({ room }: { room: IRoomState }) {
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
        <Grid container justify="center" direction="column" spacing={1}>
          <Grid className="newRoomOneAvatar">
            <RoomAvatar />
          </Grid>
          <Grid className="newRoomOneAvatar">
            <RoomAvatar />
          </Grid>
          <Grid className="newRoomOneAvatar">
            <RoomAvatar />
          </Grid>
          <Grid className="newRoomOneAvatar">
            <RoomAvatar />
          </Grid>
          <Grid className="newRoomOneAvatar">
            <RoomAvatar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
