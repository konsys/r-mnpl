import React from "react";

import { useStore } from "effector-react";

import { IFieldModalPosition } from "../../../types/types";
import { userStore } from "../../../stores/UserStore";
import { GameBoardView } from "./GameBoardView";
import { Redirect } from "react-router-dom";

export const fieldsActionPosition = (): IFieldModalPosition => {
  return {
    left: 0,
    top: 0,
  };
};

export const GameBoard = () => {
  const user = useStore(userStore);

  return user ? <GameBoardView /> : <Redirect from="/game" to="/" />;
};
