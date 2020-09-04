import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";
import { setChatMessages } from "stores/Game/Chat/GameChatStore";

export default function GameSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8001/game`);
    gameSocket.on(SocketActions.CHAT_MESSAGE, (m: string) => {
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
