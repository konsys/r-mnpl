import React, { useEffect } from "react";

import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";
import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";

export default function GameSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8001/game`);
    gameSocket.on(SocketActions.CHAT_MESSAGE, (m: IChatMessage[]) =>
      console.log(234234234, m)
    );
    return () => {};
  }, []);
  return <></>;
}
