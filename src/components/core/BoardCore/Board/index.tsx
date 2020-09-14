import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";
import { boardGate } from "../../../../stores/Game/Board/BoardStore";
import { useGate } from "effector-react";

export const Board = (props: RouteComponentProps | any) => {
  const playerIds = [1, 2, 3, 4];
  useGate(boardGate, { gameId: props.match.params.id });
  return (
    <>
      <ModalDialog />
      <BoardWrapper playerIds={playerIds} />
    </>
  );
};
