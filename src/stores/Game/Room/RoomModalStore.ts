import { GameDomain } from "../UserStore";

const RoomModalDomain = GameDomain.domain("GameModalDomain");

export const openRoomModal = RoomModalDomain.event();
export const closeRoomModal = RoomModalDomain.event();
export const gameModalStore = RoomModalDomain.store<boolean>(false)
  .on(openRoomModal, () => true)
  .reset(closeRoomModal);
