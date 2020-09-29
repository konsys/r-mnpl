import { GameDomain, user$ } from "stores/Game/User/UserModel";
import { guard, merge, sample } from "effector";

import { createGate } from "effector-react";
import { inventoryFetch } from "api/Inventory/api";

export const InventoryDomain = GameDomain.domain("InventoryDomain");

export const InventoryGate = createGate<{ userId: number | null }>();

export const getInventoryFx = InventoryDomain.effect<number, any, Error>({
  handler: inventoryFetch,
});

export const inventory$ = InventoryDomain.store<any | null>(null).on(
  getInventoryFx.done,
  (prev, { result }) => result
);

const inventorySample = sample({
  clock: merge([InventoryGate.open, user$]),
  source: user$,
  fn: (v) => v?.userId || 0,
});

guard({
  source: inventorySample,
  filter:
    InventoryGate.status && user$.map((v) => (v && v.userId > 0) || false),
  target: getInventoryFx,
});
