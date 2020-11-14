import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";
import { setChatMessages } from "stores/Game/Chat/GameChatModel";
import { SOCKET_PARAMS } from "params/socketParams";

export default function GameChatSocket() {
  useEffect(() => {
    const gameSocket = io(SOCKET_PARAMS.GAME_SOCKET);

    gameSocket.on(SocketActions.GAME_CHAT_MESSAGE, (m: string) => {
      try {
        setChatMessages(JSON.parse(m));
      } catch (e) {
        //NOP
      }
    });
    return () => {};
  }, []);
  return <></>;
}
