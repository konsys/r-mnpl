import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const room = useStore(board$);
  const playerIds = room
    ? room.room.players.map((v) => (v ? v.userId : 0))
    : [];

  console.log(66666, playerIds);
  return (
    <>
      <ModalDialog />
      {playerIds.length && <BoardWrapper playerIds={playerIds} />}
    </>
  );
};
