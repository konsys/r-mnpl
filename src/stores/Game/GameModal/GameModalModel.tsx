import { GameDomain } from "../User/UserModel";

const GameModalDomain = GameDomain.domain("ModalDomain");
export interface IGameModal {
  title: string;
  text: string;
}
export const openGameModal = GameModalDomain.event<IGameModal>();
export const closeGameModal = GameModalDomain.event();
export const gameModal$ = GameModalDomain.store<IGameModal>({
  text: "",
  title: "",
})
  .on(openGameModal, (_, payload) => payload)
  .reset(closeGameModal);
