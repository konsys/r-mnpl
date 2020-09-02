import "./style.scss";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  closeGameModal,
  gameModalStore,
} from "stores/Game/GameModal/GameModalStore";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function GameModal() {
  const modal = useStore(gameModalStore);
  const { t } = useTranslation();
  return (
    <Dialog open={modal.open} className={"gameModal"} onClose={() => null}>
      <DialogContent className={"newRoom"}>
        <Grid container></Grid>
        <Grid>
          <Typography variant="h6">{t(modal.title)}</Typography>
        </Grid>
        <Grid>
          <Typography variant="body2">{t(modal.text)}</Typography>
        </Grid>
      </DialogContent>
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
