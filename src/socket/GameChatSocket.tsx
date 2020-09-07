import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";
import { setChatMessages } from "stores/Game/Chat/GameChatStore";

export default function GameChatSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8001/gameChat`);
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
