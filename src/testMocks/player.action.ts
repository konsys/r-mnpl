import { IPlayerAction } from "stores/Board/PLayerActionStore";

export const testPlayerAction: IPlayerAction = {
  fromUserId: 1,
  toUserId: 2,
  isVisible: true,
  position: 1,
  profile: true,
  ignore: true,
  ignoreOff: true,
  report: true,
  restart: true,
  creditTake: true,
  creditPay: true,
  leave: true,
  contract: true,
  kick: true,
};
