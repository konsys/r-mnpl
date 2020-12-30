import {
  boardCompleted$,
  boardGame$,
  boardGate,
} from "stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import GameCompleted from "components/core/Game/GameCompleted/GameCompleted";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { IRoom } from "stores/Game/Rooms/RoomsModel";
import React from "react";
import { RouteComponentProps } from "react-router";
import { head } from "lodash";

export const Board = (props: RouteComponentProps | any) => {
  let gameId = "";
  try {
    gameId = props.match.params.id;
  } catch (err) {
    // NOP
  }
  // TODO add loading stores on component mount (not only board)
  useGate(boardGate, { gameId: gameId });

  const board: IRoom | null = useStore(boardGame$);
  const completed: IRoom | null = useStore(boardCompleted$);

  return (
    <>
      {completed ? (
        <GameCompleted winner={head(completed.players)} />
      ) : board && board.roomId ? (
        <BoardWrapper board={board} />
      ) : (
        <GameNotFound text={"Not found"} />
      )}
    </>
  );
};
