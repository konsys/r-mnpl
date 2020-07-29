import { GameBoardView } from "./GameBoardView";
import { ModalDialog } from "../../views/ModalDialog/ModalDialog";
import React from "react";

export const GameBoard = () => {
  return (
    <>
      <ModalDialog />
      <GameBoardView />
    </>
  );
};
