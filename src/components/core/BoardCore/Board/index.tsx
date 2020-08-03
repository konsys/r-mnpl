import { BoardCore } from "./BoardCore";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";

export const Board = () => {
  return (
    <>
      <ModalDialog />
      <BoardCore />
    </>
  );
};
