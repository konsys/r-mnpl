import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { closeGameModal, gameModalStore } from "stores/Game/Modal/ModalStore";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function GameModal() {
  const open = useStore(gameModalStore);
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={() => null}>
      <DialogContent className={"newRoom"}>Content</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            closeGameModal();
          }}
          color="primary"
          variant="outlined"
        >
          {t("Close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
