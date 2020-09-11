import React, { useEffect } from "react";

import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import { getUserFx } from "stores/Game/UserStore";

export const Board = () => {
  useEffect(() => {
    getUserFx("me");
  }, []);
  return (
    <>
      <ModalDialog />
      <BoardWrapper />
    </>
  );
};
