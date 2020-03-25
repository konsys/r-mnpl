import { GameDomain } from "./GameStore";

const VisibilityDomain = GameDomain.domain("VisibilityDomain");
export const showDicesEvent = VisibilityDomain.event();
export const hideDicesEvent = VisibilityDomain.event();
export const showActionModalEvent = VisibilityDomain.event();
export const hideActionModalEvent = VisibilityDomain.event();
export const resetVisibilityEvent = VisibilityDomain.event();

export interface VisibilityStore {
  dicesVisibility: boolean;
  tableActionModal: boolean;
}
const init = {
  dicesVisibility: false,
  tableActionModal: true
};

export const visibilityStore = VisibilityDomain.store(init)
  .on(showDicesEvent, data => ({ ...data, dicesVisibility: true }))
  .on(hideDicesEvent, data => ({ ...data, dicesVisibility: false }))
  .on(showActionModalEvent, data => ({ ...data, tableActionModal: true }))
  .on(hideActionModalEvent, data => ({ ...data, tableActionModal: false }))
  .reset(resetVisibilityEvent);
