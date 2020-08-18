import ChatMessage, { IChatMessage } from "./ChatMessage";
import { Grid, Switch, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { GRID_SPACING } from "../../../../theme";
import { useTranslation } from "react-i18next";

enum KeyName {
  "ENTER" = 13,
}
export default function GameChat() {
  const { t } = useTranslation();
  const [messages, addMessage] = useState<IChatMessage>({
    message: "start message",
    name: "Boris",
    time: new Date(),
    toName: "Ivan",
    toVip: false,
    vip: true,
  });
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
            <Grid item>
              <ChatMessage
                vip={false}
                toVip={true}
                name="name"
                toName="toName"
                message={messages.message}
                time={new Date()}
              />
            </Grid>
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
              if (
                (e.keyCode === KeyName.ENTER || e.which === KeyName.ENTER) &&
                !(e.target.name === "paginationInput")
              ) {
                addMessage({ ...messages, message: e.target.value });
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
