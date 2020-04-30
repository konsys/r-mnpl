enum ResponceCode {
  ok = 0,
  error = 1,
}

export interface IActionId {
  actionId: string;
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
  BUY = "buy",
  AUCTION_START = "auctionStart",
  ROLL_DICES_MODAL = "showDicesModal",
  TAX_PAYING_MODAL = "taxPayingModal",
  TAX_PAID = "taxPaid",
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
  disabled: boolean;
  onClick: () => void;
}

export interface IBoardEvent {
  action: BoardAction;
}

interface BoardEventData {
  id: number;
  event: IBoardEvent;
  boardStatus: BoardStatus;
  contract?: Contract;
}

export interface FieldStatus {
  fieldId: number;
  userId: number;
  level: number;
  mortgaged: boolean;
  updatedPrice: number;
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

export interface BoardStatus {
  players: IPlayer[];
  moveStatus: MoveStatus;
  fields: FieldStatus[];
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

export interface IUser {
  userId: number;
  vip: boolean;
  registrationType?: string;
  name: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
  isBlocked: boolean;
  team?: string;
}

export interface IPlayer extends UserGameStatus {
  moveOrder: 0 | 1 | 2 | 3 | 4;
  tokenLeftPosition: number;
  tokenTopPosition: number;
}
interface UserGameStatus extends IUser {
  gameId: string;
  isActing: boolean;
  doublesRolledAsCombo: number;
  jailed: number;
  unjailAttempts: number;
  prevPosition: number;
  meanPosition: number;
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

interface IToken {
  userId: number;
  meanPosition: number;
  jailed: number;
}
export interface TokenStore {
  version: number;
  tokens: IToken[];
}

export interface TokenMove {
  userId: number;
  duration: number;
  top: number;
  left: number;
}

export interface TokenMoveStore {
  version: number;
  tokens: TokenMove[];
}
