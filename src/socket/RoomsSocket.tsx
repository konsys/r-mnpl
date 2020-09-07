import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import { setChatMessages } from "stores/Game/Chat/GameChatStore";

export default function RoomsSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8002/rooms`);
    gameSocket.on(SocketActions.ROOMS_MESSAGE, (m: string) => {
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
