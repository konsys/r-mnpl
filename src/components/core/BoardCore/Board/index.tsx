import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { myCompletedRoom$, myPlayingRoom$ } from "stores/Game/Rooms/RoomsModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import GameCompleted from "components/core/Game/GameCompleted/GameCompleted";
import { GameLoading } from "components/views/BoardViews/GameLoading/GameLoading";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";
import { head } from "lodash";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const board = useStore(board$);
  const playing = useStore(myPlayingRoom$);
  const completed = useStore(myCompletedRoom$);
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
      ) : !!completed ? (
        <GameCompleted winner={completed && head(completed.players)} />
      ) : (
        <BoardWrapper playerIds={playerIds} />
      )}
    </>
  );
};
