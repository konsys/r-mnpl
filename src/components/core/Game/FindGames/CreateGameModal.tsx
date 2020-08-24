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
  closeModal,
  gameModalStore,
} from "../../../../stores/Game/GameModalStore";

import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function CreateGameModal() {
  const open = useStore(gameModalStore);
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={() => null}>
      {" "}
      <DialogContent>
        <Grid container justify="flex-end" alignItems="center">
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => closeModal()}
          />
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Grid item sm={6}>
            <Grid
              container
              // justify="center"
              alignItems="flex-start"
              direction="column"
              spacing={1}
            >
              <Grid item style={{ border: "2px solid red" }}>
                <Typography variant="h6">{t("Regular game")}</Typography>
                <Typography variant="body2">
                  {t("Usual rating match.")}
                </Typography>
              </Grid>
              <Grid item style={{ border: "2px solid red" }}>
                <Typography variant="h6">{t("Quick game")} </Typography>
                <Typography variant="body2">
                  {t("Fird dice and other rules for quick match.")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("GMS Shuffle")} </Typography>
                <Typography variant="body2">
                  {t("Tournament for playing with different cards.")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("Retro")} </Typography>
                <Typography variant="body2">
                  {t("Rules for classic monopoly")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("Russian roulette")} </Typography>
                <Typography variant="body2">
                  {t("Go and shoot. Nothing more.")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container justify="space-between" alignItems="center">
              content
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()} color="primary" variant="outlined">
          {t("Create room")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
