import { BoardDomain } from "./BoardDomain";

const DialogDomain = BoardDomain.domain("DiceDomain");

export const showDialog = DialogDomain.event<IDialogStore>();
export const hideDialog = DialogDomain.event();

export interface IDialogStore {
  title: string;
  message: string;
}

export const dialogStore = DialogDomain.store<IDialogStore>({
  message: "",
  title: "",
})
  .on(showDialog, (_, data) => data)
  .reset(hideDialog);
