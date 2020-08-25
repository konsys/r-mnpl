import "./style.scss";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  closeModal,
  gameModalStore,
} from "../../../../stores/Game/GameModalStore";

import CloseIcon from "@material-ui/icons/Close";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export enum RoomType {
  REGULAR = "regular",
  RETRO = "retro",
  SHUFFLE = "shuffle",
  QUICK = "quick",
  ROULETTE = "roulette",
}
export default function CreateGameModal() {
  const open = useStore(gameModalStore);
  const [selected, setSelected] = useState<string>(RoomType.REGULAR);
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={() => null}>
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
          <Grid item sm={5}>
            <Grid
              container
              alignItems="flex-start"
              direction="column"
              spacing={2}
              className={"newRoom"}
            >
              <Grid
                item
                className={
                  selected === RoomType.REGULAR
                    ? RoomType.REGULAR + " _selected"
                    : RoomType.REGULAR
                }
                onClick={() => setSelected(RoomType.REGULAR)}
              >
                <Typography variant="h6">{t("Regular game")}</Typography>
                <Typography variant="body2">
                  {t("Usual rating match.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  selected === RoomType.QUICK
                    ? RoomType.QUICK + " _selected"
                    : RoomType.QUICK
                }
                onClick={() => setSelected(RoomType.QUICK)}
              >
                <Typography variant="h6">{t("Quick game")}</Typography>
                <Typography variant="body2">
                  {t("Fird dice and other rules for quick match.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  selected === RoomType.SHUFFLE
                    ? RoomType.SHUFFLE + " _selected"
                    : RoomType.SHUFFLE
                }
                onClick={() => setSelected(RoomType.SHUFFLE)}
              >
                <Typography variant="h6">{t("GMS Shuffle")}</Typography>
                <Typography variant="body2">
                  {t("Tournament for playing with different cards.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  selected === RoomType.RETRO
                    ? RoomType.RETRO + " _selected"
                    : RoomType.RETRO
                }
                onClick={() => setSelected(RoomType.RETRO)}
              >
                <Typography variant="h6">{t("Retro")}</Typography>
                <Typography variant="body2">
                  {t("Rules for classic monopoly")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  selected === RoomType.ROULETTE
                    ? RoomType.ROULETTE + " _selected"
                    : RoomType.ROULETTE
                }
                onClick={() => setSelected(RoomType.ROULETTE)}
              >
                <Typography variant="h6">{t("Russian roulette")}</Typography>
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
