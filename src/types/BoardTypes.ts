enum ResponceCode {
  ok = 0,
  error = 1,
}

export type Contract = {
  fromUserId: number;
  toUserId: number;
  outFields: number[];
  outMoney: number;
  inFields: number[];
  inMoney: number;
  _id: string;
};

export enum BoardActionType {
  VOID = "void",
  ROLL_DICES = "rollDices",
  CAN_BUY = "canBuy",
  AUCTION_ACCEPT = "auctionAccept",
  AUCTION_DECLINE = "auctionDeclne",
  BUY = "buy",
  PAY_RENT_SUCCESS = "payRentSuccess",
  PAY_RENT_FAIL = "payRentFail",
  LEVEL_UP = "levelUp",
  LEVEL_DOWN = "levelDown",
  CONTRACT_ACCEPTED = "contractAccepted",
  MORTGAGE = "mortgage",
  SHOW_DICES_MODAL = "showDicesModal",
}
export interface BoardAction {
  type: BoardActionType;
  userId: number;
  _id: string;
  bet?: number;
  field?: number;
  money?: number;
  toUserId?: number;
  dices?: number[];
  dicesSum?: number;
  meanPosition?: number;
  title?: string;
  text?: string;
  actionButtons?: ActionButtons[];
}

interface ActionButtons {
  title: string;
  onClick: () => void;
}

export interface IBoardEvent {
  action: BoardAction;
}

interface BoardEventData {
  id: number;
  event: IBoardEvent;
  // TODO Remove ? after events completed
  boardStatus?: BoardStatus;
  contract?: Contract;
}

interface IUser {
  userData: UsersEntity;
  userGameStatus: UserGameStatus;
}

interface UserGameStatus {
  gameId: string;
  doublesRolledAsCombo: number;
  jailed: boolean;
  unjailAttempts: number;
  position: number;
  money: number;
  creditPayRound: boolean;
  creditNextTakeRound: number;
  score: number;
  frags: string;
  additionalTime: number;
  timeReduceLevel: number;
  creditToPay: number;
  canUseCredit: boolean;
  userId: number;
}

interface BoardFIeld {
  owner: number;
  level: number;
  mortgaged: boolean;
}

interface CurrentMove {
  dices: number[];
  dicesSum: number;
  isTriple: boolean;
  isDouble: boolean;
}

interface MoveStatus {
  moveId: string;
  playerOwnerOfMove: number;
  round: number;
  actionPlayer: number;
  currentMove: CurrentMove;
}

interface BoardStatus {
  players: IUser[];
  moveStatus: MoveStatus;
  fields: BoardFIeld[];
  timers: BoardTimers;
}

interface BoardTimers {
  timeoutTs: number;
  timeoutIsAdditional: boolean;
  pauseData: PauseData;
}

interface PauseData {
  isActive: boolean;
  viewers: 0;
  tsStart: number;
  tsNow: number;
  inactive: number;
}

export interface BoardMessage {
  code: ResponceCode;
  data: BoardEventData;
}

interface UsersEntity {
  userId: number;
  vip: boolean;
  name: string;
  team?: string;
  avatar?: string;
  isActive: boolean;
  isBlocked?: boolean;
}
