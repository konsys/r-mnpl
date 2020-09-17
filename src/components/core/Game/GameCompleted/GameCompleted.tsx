import React from "react";
import { RoomPlayer } from "stores/Game/Rooms/RoomsModel";

export default function GameCompleted({
  winner,
}: {
  winner: RoomPlayer | undefined;
}) {
  return <>Победитель {winner && winner.name}</>;
}
