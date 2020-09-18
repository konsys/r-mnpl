import { IRoomState, myPlayingRoom$ } from "stores/Game/Rooms/RoomsModel";
import {
  boardCompleted$,
  boardGate,
} from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import GameCompleted from "components/core/Game/GameCompleted/GameCompleted";
import GameNotFound from "components/core/Game/GameNotFound/GameNotFound";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";
import { head } from "lodash";

export const Board = (props: RouteComponentProps | any) => {
  const gameId = props.match.params.id;

  // TODO add loading stores on component mount (not only board)
  useGate(boardGate, { gameId: gameId });

  const playing: IRoomState | null = useStore(myPlayingRoom$);
  const completed: IRoomState | null = useStore(boardCompleted$);

  const playerIds =
    playing && Array.isArray(playing.players)
      ? playing.players.map((v) => v?.userId || 0)
      : [];

  // console.log(1111, pending);
  // console.log(2222, playing);
  // console.log(3333, completed);
  // console.log(4444, rooms);
  return (
    <>
      <ModalDialog />
      {completed ? (
        <GameCompleted winner={head(completed.players)} />
      ) : playing ? (
        <BoardWrapper playerIds={playerIds} />
      ) : (
        <GameNotFound p={playing} />
      )}
    </>
  );
};
