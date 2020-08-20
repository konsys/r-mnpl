import {
  Grid,
  Input,
  InputAdornment,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import {
  addReplyToEvent,
  chatStore,
  deleteReplyToEvent,
  replyStore,
  sendChatMessageEffect,
} from "../../../../stores/Game/GameChatStore";

import ChatMessage from "./ChatMessage";
import { GRID_SPACING } from "../../../../theme";
import PlayerChip from "./PlayerChip";
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

  sendChatMessageEffect.done.watch(() => setM(""));
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
        <Grid item id="game-chat-content" style={{ height: "225px" }}>
          <Grid
            container
            spacing={1}
            direction={"column"}
            justify={"center"}
            alignItems={"flex-start"}
          >
            {messages &&
              messages.length &&
              messages.map((v, k) => (
                <Grid item key={k}>
                  <ChatMessage
                    fromUser={v.fromUser}
                    toUser={v.toUser}
                    message={v.message}
                    addReply={addReplyToEvent}
                    time={v.time}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item id="game-chat-input">
          <Input
            style={{ width: "100%" }}
            placeholder={t("Type message and press Enter")}
            startAdornment={
              <InputAdornment position="start">
                {replies.map((v, k) => (
                  <PlayerChip
                    key={k}
                    handleDelete={() => deleteReplyToEvent(v)}
                    name={v.name}
                  />
                ))}
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
