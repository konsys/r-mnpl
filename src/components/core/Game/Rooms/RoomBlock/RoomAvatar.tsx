import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";
import { Params } from "config/params";
import React from "react";

export default function RoomAvatar({
  avatar,
  name,
  onClick,
  roomId,
}: {
  avatar: string;
  name: string;
  onClick: (id: string) => void;
  roomId: string;
}) {
  return (
    <>
      <Grid
        container
        className="avatar"
        justify="center"
        alignItems="center"
        onClick={() => onClick(roomId)}
      >
        <Grid item>
          {avatar ? (
            <img src={`${Params.BASE_URL}/${avatar}`} alt={name} />
          ) : (
            <AddIcon />
          )}
        </Grid>
        <Grid item>{name}</Grid>
      </Grid>
    </>
  );
}
