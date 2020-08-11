import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../../theme";

export const Board = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalDialog />
        <BoardWrapper />
      </ThemeProvider>
    </>
  );
};
