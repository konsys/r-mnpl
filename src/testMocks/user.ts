import { IPlayer, IUser } from "types/types";
import { PlayerRoomStatus, RoomPlayer } from "stores/Game/Rooms/RoomsModel";

export const testPlayer1: IPlayer = {
  frags: "",
  userId: 1,
  money: 15000,
  vip: true,
  registrationType: "none",
  name: "IVAN",
  team: undefined,
  avatar: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: false,
  isBlocked: true,
  isActing: true,
  gameId: "",
  doublesRolledAsCombo: 0,
  jailed: 0,
  unjailAttempts: 0,
  meanPosition: 0,
  creditPayRound: false,
  creditNextTakeRound: 0,
  score: 0,
  additionalTime: 0,
  timeReduceLevel: 0,
  creditToPay: 0,
  canUseCredit: false,
  moveOrder: 0,
};

export const testPlayer2: IPlayer = {
  frags: "",
  userId: 1,
  money: 15000,
  vip: true,
  registrationType: "none",
  name: "DIMAN",
  team: undefined,
  avatar: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: false,
  isBlocked: true,
  isActing: false,
  gameId: "",
  doublesRolledAsCombo: 0,
  jailed: 0,
  unjailAttempts: 0,
  meanPosition: 0,
  creditPayRound: false,
  creditNextTakeRound: 0,
  score: 0,
  additionalTime: 0,
  timeReduceLevel: 0,
  creditToPay: 0,
  canUseCredit: false,
  moveOrder: 0,
};

export const testUser: IUser = {
  userId: 1,
  vip: false,
  name: "IVAN",
  isActive: true,
  isBlocked: false,
};
export const testAvatarUser: IUser = {
  avatar: "/test/avatar.jpg",
  userId: 1,
  vip: false,
  name: "IVAN",
  isActive: true,
  isBlocked: false,
};
export const testVipUser: IUser = {
  userId: 3,
  vip: true,
  name: "OLEG",
  isActive: true,
  isBlocked: false,
};

export const testRoomUser: RoomPlayer = {
  playerRoomStatus: PlayerRoomStatus.ACITVE,
  userId: 3,
  vip: true,
  name: "OLEG",
  isActive: true,
  isBlocked: false,
};
