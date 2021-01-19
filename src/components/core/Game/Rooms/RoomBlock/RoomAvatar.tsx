import { Grid, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { AccessAlarm } from "@material-ui/icons";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { createImgPath } from "utils/fields.utils";
import { useTranslation } from "react-i18next";

export default function RoomAvatar({
  avatar,
  name,
  addPlayer,
  removePlayer,
  roomId,
  isMe,
  isMyRoom,
}: {
  avatar?: string;
  name?: string;
  addPlayer: () => void;
  removePlayer: ((id: string) => void) | null;
  roomId: string;
  isMe: boolean;
  isMyRoom: boolean;
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
                    <img src={createImgPath(avatar)} alt={name} />
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
                    {!isMyRoom ? (
                      <AddIcon onClick={addPlayer} />
                    ) : (
                      <span className="noCursor">
                        <AccessAlarm />
                      </span>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* TODO add link to profile */}
          <Typography variant="subtitle2">
            {isMyRoom ? name : t("Enter room")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
