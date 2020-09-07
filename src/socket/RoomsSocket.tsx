import { IRoomResponce, setRooms } from "stores/Game/Rooms/RoomsStore";
import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";

export default function RoomsSocket() {
  useEffect(() => {
    const gameSocket = io(`http://localhost:8002/rooms`);
    gameSocket.on(SocketActions.ROOMS_MESSAGE, (m: IRoomResponce) => {
      console.log(33333, m);
      try {
        setRooms(m);
      } catch (e) {
        //NOP
      }
    });
    return () => {};
  }, []);
  return <></>;
}
