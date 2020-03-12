import { createStore, createEvent } from "effector";

export const showDices = createEvent();
export const hideDices = createEvent();
export const showActionModal = createEvent();
export const hideActionModal = createEvent();
export const resetVisibility = createEvent();

export interface VisibilityStore {
  dicesVisibility: boolean;
  tableActionModal: boolean;
}
const init = {
  dicesVisibility: false,
  tableActionModal: true
};

export const visibilityStore = createStore(init)
  .on(showDices, data => ({ ...data, dicesVisibility: true }))
  .on(hideDices, data => ({ ...data, dicesVisibility: false }))
  .on(showActionModal, data => ({ ...data, tableActionModal: true }))
  .on(hideActionModal, data => ({ ...data, tableActionModal: false }))
  .reset(resetVisibility);
