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
          <Grid item sm={5}>
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              direction="column"
              spacing={1}
            >
              <Grid item>
                <Typography variant="h6">{t("Regular game")}</Typography>
                <Typography variant="body2">
                  Обычный рейтинговый матч
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("Quick game")} </Typography>
                <Typography variant="body2">
                  Третий кубик и дополнительные правила, ускоряющие матч.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("GMS Shuffle")} </Typography>
                <Typography variant="body2">
                  Турнир, где вы играете со случайными картами.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("Retro")} </Typography>
                <Typography variant="body2">
                  Играйте на поле и по правилам из лета 2015.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{t("Russian roulette")} </Typography>
                <Typography variant="body2">
                  Катайтесь по полям и стреляйте. Ничего более.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={7}>
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
