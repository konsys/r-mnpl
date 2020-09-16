import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RoomStatus } from "stores/Game/Rooms/RoomsModel";
import { RouteComponentProps } from "react-router";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const board = useStore(board$);

  console.log(23423423423, board);

  const playerIds =
    board && board.room && Array.isArray(board.room.players)
      ? board.room.players.map((v) => v?.userId || 0)
      : [];

  console.log(33333, board?.room);
  return (
    <>
      <ModalDialog />
      {!board ||
      (board && board.room.roomStatus === RoomStatus.COMPLETED) ||
      !playerIds.length ? (
        <GameNotFound />
      ) : (
        <BoardWrapper playerIds={playerIds} />
      )}
    </>
  );
};
