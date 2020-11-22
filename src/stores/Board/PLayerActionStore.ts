import { PlayersDomain } from "./PlayersStore";

export interface IPlayerAction {
  fromUserId: number;
  toUserId: number;
  isVisible: boolean;
  position: number;
  profile: boolean;
  ignore: boolean;
  ignoreOff: boolean;
  report: boolean;
  restart: boolean;
  creditTake: boolean;
  creditPay: boolean;
  leave: boolean;
  contract: boolean;
  kick: boolean;
}
export const openPlayerAction = PlayersDomain.event<IPlayerAction>();
export const closePlayerActionEvent = PlayersDomain.event();

const init: IPlayerAction = {
  fromUserId: 0,
  toUserId: 0,
  position: 1,
  isVisible: false,
  ignore: false,
  ignoreOff: false,
  profile: false,
  contract: false,
  creditTake: false,
  creditPay: false,
  kick: false,
  leave: false,
  report: false,
  restart: false,
};

export const playerActionStore = PlayersDomain.store<IPlayerAction>(init)
  .on(openPlayerAction, (_, data) => data)
  .reset(closePlayerActionEvent);
