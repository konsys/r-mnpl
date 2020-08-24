import { GameDomain } from "./UserStore";

const GameModalDomain = GameDomain.domain("ChatDomain");

export const openModal = GameModalDomain.event();
export const closeModal = GameModalDomain.event();
export const gameModalStore = GameModalDomain.store<boolean>(true)
  .on(openModal, () => true)
  .reset(closeModal);