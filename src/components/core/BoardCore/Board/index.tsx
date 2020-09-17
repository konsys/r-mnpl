import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";
import { myPlayingRoom$ } from "stores/Game/Rooms/RoomsModel";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const board = useStore(board$);
  const playing = useStore(myPlayingRoom$);

  const playerIds =
    board && board.room && Array.isArray(board.room.players)
      ? board.room.players.map((v) => v?.userId || 0)
      : [];

  return (
    <>
      <ModalDialog />
      {!playerIds.length || !board || !playing ? (
        <GameNotFound />
      ) : (
        <BoardWrapper playerIds={playerIds} />
      )}
    </>
  );
};
