import {
  Grid,
  Input,
  InputAdornment,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import {
  chatStore,
  deleteReplyToEvent,
  replyStore,
  resetChatEvent,
  resetReplyToEvent,
  sendChatMessageEffect,
} from "../../../../stores/Game/models/GameChatStore";

import ChatMessage from "./ChatMessage";
import { GRID_SPACING } from "../../../../theme";
import PlayerChip from "./PlayerChip";
import { getUserEffect } from "../../../../stores/Game/UserStore";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

enum KeyName {
  "ENTER" = 13,
}

export default function GameChat() {
  const { t } = useTranslation();
  const messages = useStore(chatStore);
  const replies = useStore(replyStore);
  const [m, setM] = useState<string>("");

  useEffect(() => {
    getUserEffect("me");
    return () => {
      resetChatEvent();
    };
  }, []);

  sendChatMessageEffect.done.watch(() => {
    resetReplyToEvent();
    setM("");
  });
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
            {messages && messages.length
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
                {replies && replies.users
                  ? replies.users.map((v, k) => (
                      // TODO make standart spacing
                      <div style={{ marginRight: "5px" }}>
                        <PlayerChip
                          handleDelete={() => deleteReplyToEvent(v)}
                          name={v.name}
                        />{" "}
                      </div>
                    ))
                  : ""}
              </InputAdornment>
            }
            value={m}
            onChange={(e: any) => {
              setM(e.target.value);

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
                  message: message,
                  replies: replies ? replies.users : [],
                });
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
