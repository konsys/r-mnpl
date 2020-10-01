import { GameDomain, user$ } from "stores/Game/User/UserModel";
import { guard, merge, sample } from "effector";

import { IInventory } from "types/types";
import { createGate } from "effector-react";
import { inventoryFetch } from "api/Inventory/api";

export const InventoryDomain = GameDomain.domain("InventoryDomain");

export const InventoryGate = createGate<{ userId: number | null }>();

export const getInventoryFx = InventoryDomain.effect<number, IInventory, Error>(
  {
    handler: inventoryFetch,
  }
);

export const inventory$ = InventoryDomain.store<IInventory | null>(null)
  .on(getInventoryFx.done, (prev, { result }) => result)
  .reset(InventoryGate.close);

const inventorySample = sample({
  clock: merge([InventoryGate.open, user$]),
  source: user$,
  fn: (v) => v?.userId,
});

guard({
  source: inventorySample,
  filter: InventoryGate.status && user$.map((v) => !!v?.userId),
  target: getInventoryFx,
});
