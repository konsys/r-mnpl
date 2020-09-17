import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { myPlayingRoom$, rooms$ } from "stores/Game/Rooms/RoomsModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import { GameLoading } from "components/views/BoardViews/GameLoading/GameLoading";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const board = useStore(board$);
  const rooms = useStore(rooms$);
  const playing = useStore(myPlayingRoom$);

  console.log(11111111, rooms);
  console.log(22222222, playing);

  const playerIds =
    board && board.room && Array.isArray(board.room.players)
      ? board.room.players.map((v) => v?.userId || 0)
      : [];

  return (
    <>
      <ModalDialog />
      <GameLoading />
      {!playerIds.length || !board || !playing ? (
        <GameNotFound />
      ) : (
        <BoardWrapper playerIds={playerIds} />
      )}
    </>
  );
};
