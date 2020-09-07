import { Grid, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { Params } from "config/params";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        onClick={() => onClick(roomId)}
      >
        <Grid item className="avatar">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            {avatar ? (
              <img src={`${Params.BASE_URL}/${avatar}`} alt={name} />
            ) : (
              <AddIcon onClick={() => onClick(roomId)} />
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            {name ? name : t("Enter room")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
