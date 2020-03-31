import { mnplSocket } from "../index";
import { GameDomain, IBoardModel } from "./BoardStore";

const ModalDomain = GameDomain.domain("ModalDomain");
export const resetModalEvent = ModalDomain.event();

interface ActionButtons {
  title: string;
  onClick: () => void;
}

interface IDiceStore {
  userId: number;
  title: string;
  text: string;
  actionButtons?: ActionButtons[];
}

const init: IDiceStore = { userId: 0, title: "", text: "" };

export const rollDicesEffect = ModalDomain.effect<
  IBoardModel,
  Promise<SocketIOClient.Socket>,
  Error
>("rollDices", {
  handler: async (game: IBoardModel) => mnplSocket.emit("rollDices", game)
});

export const setModalEvent = ModalDomain.event<IDiceStore>();

export const dicesStore = ModalDomain.store(init)
  .on(setModalEvent, (prev, data) => {
    console.log("setModalEvent", data);
  })
  .reset(resetModalEvent);
