import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";

export const Board = () => {
  return (
    <>
      <ModalDialog />
      <BoardWrapper />
    </>
  );
};
