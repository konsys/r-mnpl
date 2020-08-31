import { GameDomain } from "./UserStore";

const GameModalDomain = GameDomain.domain("GameModalDomain");

export const openModal = GameModalDomain.event();
export const closeModal = GameModalDomain.event();
export const gameModalStore = GameModalDomain.store<boolean>(false)
  .on(openModal, () => true)
  .reset(closeModal);
