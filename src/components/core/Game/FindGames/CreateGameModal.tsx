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
import QuickGameParams from "./GameParams/QuickGameParams";
import RegularGameParams from "./GameParams/RegularGameParams";
import RetroGameParams from "./GameParams/RetroGameParams";
import RouletteGameParams from "./GameParams/RouletteGameParams";
import ShuffleGameParams from "./GameParams/ShuffleGameParams";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export enum RoomType {
  REGULAR = "regular",
  RETRO = "retro",
  SHUFFLE = "shuffle",
  QUICK = "quick",
  ROULETTE = "roulette",
}

export interface IRoomState {
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
  restarts?: boolean;
}
export interface IRoomSetup {
  state: IRoomState;
  setState: (n: IRoomState) => void;
}

export default function CreateGameModal() {
  const open = useStore(gameModalStore);
  const [selected, setSelected] = useState<string>(RoomType.SHUFFLE);
  const { t } = useTranslation();

  const [state, setState] = useState<IRoomState>({
    autostart: true,
    playersNumber: 4,
    privateRoom: false,
  });

  return (
    <Dialog open={open} onClose={() => null}>
      <DialogContent className={"newRoom"}>
        <Grid container justify="flex-end" alignItems="center">
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => closeModal()}
          />
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          direction="row"
          spacing={1}
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
          <Grid item sm={6} className="roomParams">
            <Grid container justify="space-between" alignItems="center">
              {selected === RoomType.REGULAR && (
                <RegularGameParams setup={{ state, setState }} />
              )}
              {selected === RoomType.QUICK && (
                <QuickGameParams setup={{ state, setState }} />
              )}
              {selected === RoomType.RETRO && (
                <RetroGameParams setup={{ state, setState }} />
              )}
              {selected === RoomType.ROULETTE && (
                <RouletteGameParams setup={{ state, setState }} />
              )}
              {selected === RoomType.SHUFFLE && (
                <ShuffleGameParams setup={{ state, setState }} />
              )}
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
