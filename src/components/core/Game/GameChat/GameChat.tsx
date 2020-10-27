import {
  Grid,
  Input,
  InputAdornment,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import {
  chatGate,
  chatStore,
  deleteReplyToEvent,
  replyStore,
  resetReplyToEvent,
  sendChatMessageEffect,
} from "stores/Game/Chat/GameChatModel";
import { useGate, useStore } from "effector-react";

import ChatMessage from "./ChatMessage";
import { GRID_SPACING } from "theme";
import PlayerChip from "./PlayerChip";
import { useTranslation } from "react-i18next";

enum KeyName {
  "ENTER" = 13,
}

export default function GameChat() {
  // useGate(chatGate);

  const { t } = useTranslation();
  const messages = useStore(chatStore);
  const replyTo = useStore(replyStore);
  const [message, setMessage] = useState<string>("");

  sendChatMessageEffect.done.watch(() => {
    resetReplyToEvent();
    setMessage("");
  });

  // TODO focus on added message
  const inputEl = useRef<HTMLInputElement>(null);

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
            startAdornment={
              <InputAdornment position="start" variant="outlined">
                {replyTo && replyTo.users
                  ? replyTo.users.map((v, k) => (
                      // TODO make standart spacing
                      <div style={{ marginRight: "5px" }} key={k}>
                        <PlayerChip
                          key={k}
                          handleDelete={() => deleteReplyToEvent(v)}
                          name={v.name}
                        />
                      </div>
                    ))
                  : ""}
              </InputAdornment>
            }
            value={message}
            onChange={(e: any) => {
              setMessage(e.target.value);

              try {
                if (inputEl && inputEl.current && inputEl?.current.focus) {
                  inputEl.current.focus();
                }
              } catch (er) {}
            }}
            onKeyPress={(e: any) => {
              const message = e.target.value;
              if (
                (e.keyCode === KeyName.ENTER || e.which === KeyName.ENTER) &&
                message.length
              ) {
                sendChatMessageEffect({
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
