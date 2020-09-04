import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";

export default function GameSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8001/game`);
    gameSocket.on(SocketActions.GAME_MESSAGE, () => console.log(234234234));
    return () => {};
  }, []);
  return <></>;
}
