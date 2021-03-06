import "./style.scss";

import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  closeGameModal,
  gameModal$,
} from "stores/Game/GameModal/GameModalModel";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function GameModal() {
  const modal = useStore(gameModal$);
  const { t } = useTranslation();
  return (
    <Dialog open={!!modal.text || !!modal.title} onClose={() => null}>
      <DialogContent className={"gameModal"}>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6">{t(modal.title)}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{t(modal.text)}</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                closeGameModal();
              }}
              color="default"
              variant="contained"
            >
              {t("Ok")}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
