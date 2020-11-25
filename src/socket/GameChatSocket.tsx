import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import { connect } from "socket.io-client";
import { setChatMessages } from "stores/Game/Chat/GameChatModel";
import { SOCKET_PARAMS } from "params/socketParams";

export default function GameChatSocket() {
  useEffect(() => {
    connect(SOCKET_PARAMS.GAME_SOCKET).on(
      SocketActions.GAME_CHAT_MESSAGE,
      (m: string) => {
        try {
          setChatMessages(JSON.parse(m));
        } catch (e) {
          //NOP
        }
      }
    );
    return () => {};
  }, []);
  return <></>;
}
