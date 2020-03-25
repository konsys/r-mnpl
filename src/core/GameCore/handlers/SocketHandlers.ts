import { setDicesEvent } from "../models/DicesStore";

export const rollDicesHandler = (rollDices: any) => {
  console.log(234234234, rollDices);
  const dices = rollDices.data.events.find((v: any) => v.type === "rollDices");

  setDicesEvent(dices);
};
