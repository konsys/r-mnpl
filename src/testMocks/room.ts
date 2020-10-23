import {
  IRoomState,
  PlayerRoomStatus,
  RoomPortalFieldType,
  RoomStatus,
  RoomType,
} from "stores/Game/Rooms/RoomsModel";
import { testPlayer1, testPlayer2 } from "./user";

export const testRoom: IRoomState = {
  roomId: "testRoomId",
  creatorId: 1,
  winnerId: null,
  players: [
    { ...testPlayer1, playerRoomStatus: PlayerRoomStatus.ACITVE },
    { ...testPlayer2, playerRoomStatus: PlayerRoomStatus.ACITVE },
  ],
  createTime: new Date(),
  roomType: RoomType.REGULAR,
  playersNumber: 2,
  autostart: false,
  privateRoom: false,
  restarts: false,
  portalType: RoomPortalFieldType.NOP,
  roomStatus: RoomStatus.PLAYING,
};
