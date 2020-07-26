enum ResponceCode {
  ok = 0,
  error = 1,
}

export interface IActionId {
  actionId: string;
}

export interface IFieldId {
  fieldId: number;
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

export enum IFieldAction {
  MORTGAGE = 0,
  UNMORTGAGE = 1,
  LEVEL_UP = 2,
  LEVEL_DOWN = 3,
}

export interface IFetchGameAction {
  action: OutcomeMessageType;
  fieldId?: number;
}

export enum OutcomeMessageType {
  OUTCOME_TOKEN_TRANSITION_COMPLETED = "changeTokenPositionCompleted",
  OUTCOME_AUCTION_START_CLICKED = "auctionStartClicked",
  OUTCOME_AUCTION_ACCEPT_CLICKED = "auctionAcceptClicked",
  OUTCOME_AUCTION_DECLINE_CLICKED = "auctionDeclineClicked",
  OUTCOME_BUY_FIELD_CLICKED = "buyFieldClicked",
  OUTCOME_TAX_PAID_CLICKED = "taxPaidCLicked",
  OUTCOME_UN_JAIL_PAID_CLICKED = "unJailPaidClicked",
  OUTCOME_ROLL_DICES_CLICKED = "rollDicesClicked",
  OUTCOME_MORTGAGE_FIELD_CLICKED = "mortgageFieldClicked",
  OUTCOME_UN_MORTGAGE_FIELD_CLICKED = "unMortgageFieldClicked",
  OUTCOME_LEVEL_UP_FIELD_CLICKED = "levelUpFieldClicked",
  OUTCOME_LEVEL_DOWN_FIELD_CLICKED = "levelDownFieldClicked",
}

export enum IncomeMessageType {
  DO_NOTHING = "doNothing",
  INCOME_PLAYER_TOKEN_POSITION_ACTION = "changeTokenAction",
  INCOME_CAN_BUY_MODAL = "canBuyModal",
  INCOME_TAX_PAYING_MODAL = "taxPayingModal",
  INCOME_UNJAIL_PAYING_MODAL = "unjailPayingModal",
  INCOME_ROLL_DICES_MODAL = "rollDicesModal",
  INCOME_UN_JAIL_MODAL = "unJailModal",
  INCOME_UN_JAIL_ACTION = "unJailAction",
  INCOME_AUCTION_MODAL = "auctionModal",
  INCOME_ROLL_DICES_ACTION = "rollDicesAction",
}

export interface BoardAction {
  _id: string;
  type: OutcomeMessageType | IncomeMessageType;
  bet?: number;
  field?: IField;
  money?: number;
  userId: number;
  toUserId?: number;
  tokenPosition?: number;
  title?: string;
  text?: string;
  actionButtons?: ActionButtons[];
  isModal: boolean;
}

export interface IDices extends BoardAction {
  dices?: number[];
  dicesSum?: number;
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
  mortgaged: number;
  branches: number;
  fieldActions: IFieldAction[];
}

export interface IFieldModalPosition {
  top: number;
  left: number;
}

export interface IField {
  fieldId?: number;
  fieldPosition: number;
  imgSrc?: string;
  name: string;
  fieldSpecial?: number;
  fieldGroup?: number;
  fieldGroupName?: string;
  fieldCorner?: number;
  fieldLine?: number;
  isJail?: boolean;
  status?: FieldStatus;
  type: FieldType;
  currency?: string;
  price?: IFieldPrice;
  rent?: IFieldRent;
  description?: string;
  onClick?: () => any;
}

export interface IFieldRent {
  baseRent: number;
  oneStar: number;
  twoStar: number;
  freeStar: number;
  fourStar: number;
  bigStar: number;
  paymentMultiplier?: number;
}

export interface IFieldPrice {
  startPrice: number;
  pledgePrice: number;
  buyoutPrice: number;
  branchPrice: number;
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
export enum LocalStorageParams {
  TOKEN = "token",
}

export interface IContract {
  fromUserId: number;
  toUserId: number;
  fields?: IField[];
  money?: number;
}
