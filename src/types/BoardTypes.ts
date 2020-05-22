enum ResponceCode {
  ok = 0,
  error = 1,
}

export interface IActionId {
  actionId: string;
}

export interface IMoveCompleted extends IActionId {
  userId: number;
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
  PLAYER_TOKEN_MOVED = "playerTokenMoved",
  CAN_BUY = "canBuy",
  BUY = "buy",
  AUCTION_START = "auctionStart",
  ROLL_DICES_MODAL = "rollDicesModal",
  TAX_PAYING_MODAL = "taxPayingModal",
  TAX_PAID = "taxPaid",
  UN_JAIL_MODAL = "unJailModal",
  UN_JAIL_PAID = "unJailPaid",
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
  tokenPosition?: number;
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
}
interface UserGameStatus extends IUser {
  gameId: string;
  isActing: boolean;
  doublesRolledAsCombo: number;
  jailed: number;
  justUnjailed: boolean;
  unjailAttempts: number;
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

export interface IToken {
  userId: number;
  left: number;
  top: number;
  jailed: number;
  meanPosition: number;
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
export enum FieldType {
  CHANCE = "chance",
  COMPANY = "company",
  JAIL = "jail",
  ROULETTE = "roulette",
  CASINO = "casino",
  START = "start",
  TAX = "tax",
  IT = "IT",
  AUTO = "auto",
  TAKE_REST = "takeRest",
}
