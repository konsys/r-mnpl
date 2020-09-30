import { IPlayer } from "types/types";
import { Players } from "../../../views/BoardViews/Players/Players";
import React from "react";

export const PlayersCore = ({ players }: { players: IPlayer[] }) => {
  return (
    <>
      <Players players={players} />
    </>
  );
};
