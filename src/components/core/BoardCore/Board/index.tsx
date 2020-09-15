import { RoomStatus, playingRooms$ } from "stores/Game/Rooms/RoomsModel";
import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const board = useStore(board$);
  const playingRooms = useStore(playingRooms$);

  const playerIds =
    board && board.room && Array.isArray(board.room.players)
      ? board.room.players.map((v) => v?.userId || 0)
      : [];

  console.log(33333, playingRooms);
  return (
    <>
      {!board ||
        (board && board.room.roomStatus === RoomStatus.COMPLETED && "NotFound")}

      <ModalDialog />
      {playerIds.length && <BoardWrapper playerIds={playerIds} />}
    </>
  );
};
