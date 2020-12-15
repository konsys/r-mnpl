import { Grid, Input, Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  chatGate,
  gameChat$,
  repliesToChatMessage$,
  resetReplyToChatMessage,
  sendChatMessageFx,
} from "stores/Game/Chat/GameChatModel";
import { useGate, useStore } from "effector-react";

import ChatInputAdornment from "./ChatInputAdornment";
import ChatMessage from "./ChatMessage";
import { GRID_SPACING } from "theme";
import { Key } from "ts-keycode-enum";
import { useTranslation } from "react-i18next";

export default function GameChat() {
  useGate(chatGate);

  const { t } = useTranslation();
  const messages = useStore(gameChat$);
  const replyTo = useStore(repliesToChatMessage$);
  const [message, setMessage] = useState<string>("");

  sendChatMessageFx.done.watch(() => {
    resetReplyToChatMessage();
    setMessage("");
  });

  return (
    <>
      <Grid container direction="column" spacing={GRID_SPACING}>
        <Grid item id="game-chat-header">
          <Grid container spacing={GRID_SPACING} alignItems="center">
            <Grid item>
              <Typography variant="h6">{t("Chat")}</Typography>
            </Grid>
            <Grid item>
              {/* TODO online players */}
              <Typography variant="body2" className="_online-players">
                {"2900"}
              </Typography>
              <Typography variant="body2">{t("now online")}</Typography>
            </Grid>
            <Grid item>
              {/* TODO Show bots messages */}
              <Switch
                checked={true}
                onChange={() => null}
                name="botSwitch"
                inputProps={{ "aria-label": "secondary checkbox" }}
                color={"primary"}
              />
              <Typography variant="body2">{t("Show bots messages")}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          id="game-chat-content"
          style={{
            maxHeight: "225px",
            overflow: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <Grid
            container
            spacing={1}
            direction={"column"}
            justify={"center"}
            alignItems={"flex-start"}
          >
            {messages && Array.isArray(messages)
              ? messages.map((v, k) => (
                  <Grid item key={k}>
                    <ChatMessage
                      key={k}
                      fromUser={v.fromUser}
                      replies={v.replies}
                      message={v.message}
                      time={v.time}
                    />
                  </Grid>
                ))
              : ""}
          </Grid>
        </Grid>
        <Grid item id="game-chat-input">
          <Input
            style={{ width: "100%" }}
            placeholder={t("Type message and press Enter")}
            startAdornment={<ChatInputAdornment />}
            value={message}
            onChange={(e: any) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e: any) => {
              const message = e.target.value;
              if (
                (e.keyCode === Key.Enter || e.which === Key.Enter) &&
                message.length
              ) {
                sendChatMessageFx({
                  message,
                  replies: replyTo ? replyTo.users : [],
                });
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
