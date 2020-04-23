import { playersStore } from "../stores/PlayersStore";
import { IUser } from "../types/BoardTypes";

export const playersHandler = (players: IUser[]) => {
  const pStore = playersStore.getState();
  console.log("playersHandler", pStore);
};
