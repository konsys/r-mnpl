import { IRoomResponce, setRooms } from "stores/Game/Rooms/RoomsModel";
import React, { useEffect } from "react";

import { SocketActions } from "types/Socket/SocketTypes";
import io from "socket.io-client";
import { SOCKET_PARAMS } from "params/socketParams";

export default function RoomsSocket() {
  useEffect(() => {
    const gameSocket = io(SOCKET_PARAMS.ROOMS_SOCKET);
    gameSocket.on(SocketActions.ROOMS_MESSAGE, (m: IRoomResponce) => {
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
