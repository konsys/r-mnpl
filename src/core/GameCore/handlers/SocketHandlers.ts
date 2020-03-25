import { setDicesEvent } from "../models/DicesStore";

export const rollDicesHandler = (rollDices: any) => {
  const dices = rollDices.data.events.find((v: any) => v.type === "rollDices");

  setDicesEvent(dices);
};
