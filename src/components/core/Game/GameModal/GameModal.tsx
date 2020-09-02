import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { closeGameModal, gameModalStore } from "stores/Game/Modal/ModalStore";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function GameModal() {
  const modal = useStore(gameModalStore);
  const { t } = useTranslation();
  return (
    <Dialog open={modal.open} onClose={() => null}>
      <DialogContent className={"newRoom"}>
        <Typography variant="h6">{t(modal.title)}</Typography>
        <Typography variant="body2">{t(modal.text)}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            closeGameModal();
          }}
          color="secondary"
          variant="outlined"
        >
          {t("Close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
