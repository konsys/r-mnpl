import { Grid, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Params } from "config/params";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoomAvatar({
  avatar,
  name,
  addPlayer,
  removePlayer,
  roomId,
  isMe,
}: {
  avatar: string;
  name: string;
  addPlayer: () => void;
  removePlayer: ((id: string) => void) | null;
  roomId: string;
  isMe: boolean;
}) {
  const { t } = useTranslation();

  return (
    <>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item className="avatar">
          <Grid
            container
            justify="center"
            alignItems="center"
            alignContent="center"
            direction="column"
          >
            <Grid item>
              {avatar && name ? (
                <>
                  <div className="avatarWrap">
                    {isMe && removePlayer && (
                      <HighlightOffIcon onClick={() => removePlayer(roomId)} />
                    )}
                    <img src={`${Params.BASE_URL}/${avatar}`} alt={name} />
                  </div>
                </>
              ) : (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  alignContent="center"
                  direction="column"
                >
                  <Grid item className="addPlayerWrap">
                    <AddIcon onClick={addPlayer} />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* TODO add link to profile */}
          <Typography variant="subtitle2">
            {name ? name : t("Enter room")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
