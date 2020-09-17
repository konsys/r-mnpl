import React from "react";
import { RoomPlayer } from "stores/Game/Rooms/RoomsModel";
import ToMainPage from "components/views/Errors/ToMainPage";

export default function GameCompleted({
  winner,
}: {
  winner: RoomPlayer | undefined;
}) {
  return (
    <>
      Победитель {winner && winner.name} <ToMainPage />
    </>
  );
}
