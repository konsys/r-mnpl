import ChatMessage, { IChatMessage } from "./ChatMessage";
import { Grid, Switch, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  chatStore,
  sendChatMessageEffect,
} from "../../../../stores/Game/GameChatStore";

import { GRID_SPACING } from "../../../../theme";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

enum KeyName {
  "ENTER" = 13,
}
export default function GameChat() {
  const { t } = useTranslation();
  const messages = useStore(chatStore);
  const [m, setM] = useState<string>("");
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
            {messages.map((v) => (
              <Grid item>
                <ChatMessage
                  vip={v.vip}
                  toVip={v.toVip}
                  name={v.name}
                  toName={v.toName}
                  message={v.message}
                  time={v.time}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item id="game-chat-input">
          <TextField
            helperText={t("Type message and press Enter")}
            id="outlined-basic"
            // label="Outlined"
            variant="outlined"
            size="small"
            value={m}
            fullWidth={true}
            onChange={(e: any) => setM(e.target.value)}
            onKeyPress={(e: any) => {
              if (e.keyCode === KeyName.ENTER || e.which === KeyName.ENTER) {
                sendChatMessageEffect(e.target.value);
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
