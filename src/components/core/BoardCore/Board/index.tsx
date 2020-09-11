import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RouteComponentProps } from "react-router";
import { boardGate } from "../../../../stores/Board/BoardStore";
import { useGate } from "effector-react";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const playerIds = [1, 2, 3, 4];
  return (
    <>
      <ModalDialog />
      <BoardWrapper playerIds={playerIds} />
    </>
  );
};
