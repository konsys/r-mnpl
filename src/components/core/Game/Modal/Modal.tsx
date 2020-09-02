import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { closeModal, modalStore } from "stores/Game/Modal/ModalStore";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function Modal() {
  const open = useStore(modalStore);
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={() => null}>
      <DialogContent className={"newRoom"}>Content</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            closeModal();
          }}
          color="primary"
          variant="outlined"
        >
          {t("Create room")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
