import {
  deleteReplyToChatMessage,
  repliesToChatMessage$,
} from "stores/Game/Chat/GameChatModel";

import { InputAdornment } from "@material-ui/core";
import PlayerChip from "./PlayerChip";
import React from "react";
import { useStore } from "effector-react";

export default function ChatInputAdornment() {
  const replyTo = useStore(repliesToChatMessage$);
  return (
    <div>
      <InputAdornment position="start" variant="outlined">
        {replyTo && replyTo.users
          ? replyTo.users.map((v, k) => (
              // TODO make standart spacing
              <div style={{ marginRight: "5px" }} key={k}>
                <PlayerChip
                  key={k}
                  handleDelete={() => deleteReplyToChatMessage(v)}
                  name={v.name}
                />
              </div>
            ))
          : ""}
      </InputAdornment>
    </div>
  );
}
