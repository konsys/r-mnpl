import { playersStore } from "../stores/PlayersStore";

export const getActingPlayer = () => {
  const pStore = playersStore.getState();
  return pStore.players.find((v) => v.isActing === true);
};
