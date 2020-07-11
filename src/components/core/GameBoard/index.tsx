import React from "react";

import { useStore } from "effector-react";

import { IFieldModalPosition } from "../../../types/types";
import { GameBoardView } from "./GameBoardView";

export const fieldsActionPosition = (): IFieldModalPosition => {
  return {
    left: 0,
    top: 0,
  };
};

export const GameBoard = () => {
  return <GameBoardView />;
};
