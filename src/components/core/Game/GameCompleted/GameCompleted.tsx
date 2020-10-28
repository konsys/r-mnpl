import React from "react";
import { RoomPlayer } from "stores/Game/Rooms/RoomsModel";
import ToMainPage from "components/views/Errors/ToMainPage";

// TODO add winner page template
export default function GameCompleted({
  winner,
}: {
  winner: RoomPlayer | undefined;
}) {
  return (
    <>
      <div className="_winner">Победитель {winner && winner.name}</div>
      <ToMainPage />
    </>
  );
}
