import { GameDomain } from "../UserStore";

const ModalDomain = GameDomain.domain("ModalDomain");

export const openModal = ModalDomain.event();
export const closeModal = ModalDomain.event();
export const modalStore = ModalDomain.store<boolean>(false)
  .on(openModal, () => true)
  .reset(closeModal);
