import { GameDomain } from "stores/Game/User/UserModel";
import { createGate } from "effector-react";

export const InventoryDomain = GameDomain.domain("InventoryDomain");

export const InventoryGate = createGate<number>();
