import { GameDomain } from "../UserStore";
import { resetRoomsStore } from "./RoomsStore";
import { sample } from "effector";

const RoomModalDomain = GameDomain.domain("GameModalDomain");

export const openRoomModal = RoomModalDomain.event();
export const closeRoomModal = RoomModalDomain.event();
export const roomModalStore = RoomModalDomain.store<boolean>(false)
  .on(openRoomModal, () => true)
  .reset(closeRoomModal);

sample({
  clock: closeRoomModal,
  source: resetRoomsStore,
  target: resetRoomsStore,
});