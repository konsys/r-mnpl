import { GameDomain } from "../User/UserModel";
import { resetRoomsStore } from "./RoomsModel";
const RoomModalDomain = GameDomain.domain("GameModalDomain");

export const openRoomModal = RoomModalDomain.event();
export const closeRoomModal = RoomModalDomain.event();
export const roomModal$ = RoomModalDomain.store<boolean>(false)
  .on(openRoomModal, () => true)
  .reset(closeRoomModal);

closeRoomModal.watch(resetRoomsStore);
