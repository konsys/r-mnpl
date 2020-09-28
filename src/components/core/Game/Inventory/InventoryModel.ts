import { merge, sample } from "effector";

import { GameDomain } from "stores/Game/User/UserModel";
import { createGate } from "effector-react";
import { inventoryFetch } from "api/Inventory/api";

export const InventoryDomain = GameDomain.domain("InventoryDomain");

export const InventoryGate = createGate<number>();

export const getInventoryFx = InventoryDomain.effect<number, any, Error>({
  handler: inventoryFetch,
});

sample({
  clock: merge([InventoryGate.open]),
  source: InventoryGate.state,

  target: getInventoryFx,
});
