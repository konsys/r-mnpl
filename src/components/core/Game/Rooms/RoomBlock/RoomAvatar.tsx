import { Grid, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { EuroTwoTone } from "@material-ui/icons";
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
  myRoomId,
}: {
  avatar?: string;
  name?: string;
  addPlayer: () => void;
  removePlayer: ((id: string) => void) | null;
  roomId: string;
  isMe: boolean;
  myRoomId: string | null;
}) {
  const { t } = useTranslation();

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ maxWidth: "140px" }}
      >
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
                    {!myRoomId ? (
                      <AddIcon onClick={addPlayer} />
                    ) : (
                      <span className="noCursor">
                        <EuroTwoTone />
                      </span>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
          {/* TODO add link to profile */}
          <Typography variant="subtitle2">
            {myRoomId ? name : t("Enter room")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
