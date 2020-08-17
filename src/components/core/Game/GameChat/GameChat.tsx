import { Grid, Switch, Typography } from "@material-ui/core";

import ChatMessage from "./ChatMessage";
import { GRID_SPACING } from "../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function GameChat() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container direction="column" spacing={GRID_SPACING}>
        <Grid item id="game-chat-header">
          <Grid container spacing={GRID_SPACING} alignItems="center">
            <Grid item>
              <Typography variant="h6">{t("Chat")}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2"> {123456}</Typography>{" "}
              <Typography variant="body2">{t("now online")}</Typography>
            </Grid>
            <Grid item>
              <Switch
                checked={true}
                onChange={() => null}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
                color={"primary"}
              />
              <Typography variant="body2">{t("Show bots messages")}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item id="game-chat-content" style={{ height: "225px" }}>
          <Grid container>
            <Grid item>
              <ChatMessage
                vip={true}
                toVip={false}
                name="name"
                toName="toName"
                message={"message"}
                time={new Date()}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item id="game-chat-input">
          <input />
        </Grid>
      </Grid>
    </>
  );
}
