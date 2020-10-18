import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { dialogStore, hideDialog } from "../../../../stores/Board/DialogStore";

import React from "react";
import { useStore } from "effector-react";

export const ModalDialog = () => {
  const dialog = useStore(dialogStore);
  return (
    <>
      {true && (
        <Dialog
          open={!!(dialog.title && dialog.message)}
          onClose={() => hideDialog()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialog.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => hideDialog()} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
