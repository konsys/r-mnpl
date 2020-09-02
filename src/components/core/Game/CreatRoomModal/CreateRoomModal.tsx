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
  RoomType,
  createRoom,
  newRoomStore,
  updateRoom,
} from "stores/Game/Room/NewRoomStore";
import {
  closeRoomModal,
  roomModalStore,
} from "stores/Game/Room/RoomModalStore";

import CloseIcon from "@material-ui/icons/Close";
import QuickGameParams from "./GameParams/QuickGameParams";
import React from "react";
import RegularGameParams from "./GameParams/RegularGameParams";
import RetroGameParams from "./GameParams/RetroGameParams";
import RouletteGameParams from "./GameParams/RouletteGameParams";
import ShuffleGameParams from "./GameParams/ShuffleGameParams";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function CreateRoomModal() {
  const open = useStore(roomModalStore);
  const { t } = useTranslation();
  const room = useStore(newRoomStore);
  const { roomType } = room;
  return (
    <Dialog open={open} onClose={() => null}>
      <DialogContent className={"newRoom"}>
        <Grid container justify="flex-end" alignItems="center">
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => closeRoomModal()}
          />
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          direction="row"
          spacing={1}
          className={"roomContent"}
        >
          <Grid item sm={5}>
            <Grid
              container
              direction="column"
              spacing={2}
              className="menuBlock"
            >
              <Grid
                item
                className={
                  roomType === RoomType.REGULAR
                    ? RoomType.REGULAR + " _selected"
                    : RoomType.REGULAR
                }
                onClick={() =>
                  updateRoom({ ...room, roomType: RoomType.REGULAR })
                }
              >
                <Typography variant="h6">{t("Regular game")}</Typography>
                <Typography variant="body2">
                  {t("Usual rating match.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  roomType === RoomType.QUICK
                    ? RoomType.QUICK + " _selected"
                    : RoomType.QUICK
                }
                onClick={() =>
                  updateRoom({ ...room, roomType: RoomType.QUICK })
                }
              >
                <Typography variant="h6">{t("Quick game")}</Typography>
                <Typography variant="body2">
                  {t("Fird dice and other rules for quick match.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  roomType === RoomType.SHUFFLE
                    ? RoomType.SHUFFLE + " _selected"
                    : RoomType.SHUFFLE
                }
                onClick={() =>
                  updateRoom({ ...room, roomType: RoomType.SHUFFLE })
                }
              >
                <Typography variant="h6">{t("GMS Shuffle")}</Typography>
                <Typography variant="body2">
                  {t("Tournament for playing with different cards.")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  roomType === RoomType.RETRO
                    ? RoomType.RETRO + " _selected"
                    : RoomType.RETRO
                }
                onClick={() =>
                  updateRoom({ ...room, roomType: RoomType.RETRO })
                }
              >
                <Typography variant="h6">{t("Retro")}</Typography>
                <Typography variant="body2">
                  {t("Rules for classic monopoly")}
                </Typography>
              </Grid>
              <Grid
                item
                className={
                  roomType === RoomType.ROULETTE
                    ? RoomType.ROULETTE + " _selected"
                    : RoomType.ROULETTE
                }
                onClick={() =>
                  updateRoom({ ...room, roomType: RoomType.ROULETTE })
                }
              >
                <Typography variant="h6">{t("Russian roulette")}</Typography>
                <Typography variant="body2">
                  {t("Go and shoot. Nothing more.")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} className="roomParams">
            <Grid container justify="space-between" alignItems="center">
              {roomType === RoomType.REGULAR && <RegularGameParams />}
              {roomType === RoomType.QUICK && <QuickGameParams />}
              {roomType === RoomType.RETRO && <RetroGameParams />}
              {roomType === RoomType.ROULETTE && <RouletteGameParams />}
              {roomType === RoomType.SHUFFLE && <ShuffleGameParams />}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            createRoom();
            closeRoomModal();
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
