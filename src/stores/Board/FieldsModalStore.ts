import { BoardDomain } from "./BoardDomain";

const DiceDomain = BoardDomain.domain("DiceDomain");

export const isFieldModalVisible = DiceDomain.event();
export const resetFieldModalVisible = DiceDomain.event();

export interface IFieldModalStore {
  visibleFieldId: number;
}

export const fieldModalStore = DiceDomain.store<IFieldModalStore>({
  visibleFieldId: 0,
})
  .on(isFieldModalVisible, (_, data) => data)
  .reset(resetFieldModalVisible);
