import { Board } from "./Board";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";

export const GameBoard = () => {
  return (
    <>
      <ModalDialog />
      <Board />
    </>
  );
};
