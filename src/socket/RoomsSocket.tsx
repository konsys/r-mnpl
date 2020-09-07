import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";
import { setRooms } from "stores/Game/Rooms/RoomsStore";

export default function RoomsSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8002/rooms`);
    gameSocket.on(SocketActions.ROOMS_MESSAGE, (m: string) => {
      try {
        setRooms(JSON.parse(m));
      } catch (e) {
        //NOP
      }
    });
    return () => {};
  }, []);
  return <></>;
}
