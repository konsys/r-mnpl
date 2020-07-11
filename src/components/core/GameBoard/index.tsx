import React from "react";
import { IFieldModalPosition } from "../../../types/types";
import { GameBoardView } from "./GameBoardView";
import { getToken } from "../Login/model/TokenModel";
export const fieldsActionPosition = (): IFieldModalPosition => {
  return {
    left: 0,
    top: 0,
  };
};

export const GameBoard = () => {
  const token = getToken();
  return <>{token ? <GameBoardView /> : "no"}</>;
};
