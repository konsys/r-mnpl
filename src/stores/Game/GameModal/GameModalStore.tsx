import { GameDomain } from "../UserStore";

const GameModalDomain = GameDomain.domain("ModalDomain");
export interface IGameModal {
  open: boolean;
  title: string;
  text: string;
}
export const openGameModal = GameModalDomain.event<IGameModal>();
export const closeGameModal = GameModalDomain.event();
export const gameModalStore = GameModalDomain.store<IGameModal>({
  open: false,
  text: "",
  title: "",
})
  .on(openGameModal, (_, payload) => payload)
  .reset(closeGameModal);
