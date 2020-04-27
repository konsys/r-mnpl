import { IPlayer } from "../types/BoardTypes";
import { updatePlayers } from "../utils/players.utils";

export const playersHandler = (players: IPlayer[]) => updatePlayers(players);
