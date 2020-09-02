import { GameDomain } from "../UserStore";

const GameModalDomain = GameDomain.domain("ModalDomain");

export const openGameModal = GameModalDomain.event();
export const closeGameModal = GameModalDomain.event();
export const gameModalStore = GameModalDomain.store<boolean>(false)
  .on(openGameModal, () => true)
  .reset(closeGameModal);
