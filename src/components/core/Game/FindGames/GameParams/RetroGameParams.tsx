import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../CreateGameModal";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { useTranslation } from "react-i18next";

export default function RetroGameParams({ setup }: { setup: IRoomSetup }) {
  const { t } = useTranslation();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{t("Retro game")}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t(
            "Запускаем ностальгию! Играйте на поле и по правилам, которые действовали летом 2015."
          )}
          <br />
          {t("Подробнее о правилах этого режима можно прочитать здесь.")}
        </Typography>
      </Grid>
      <Grid item>
        <PlayersNumber setup={setup} battleClosed={true} />
      </Grid>
      <Grid item>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <RoomSwitch
          setup={setup}
          text={"Private room"}
          parameterName={"privateRoom"}
        />
        <RoomSwitch
          setup={setup}
          text={"Game autostart"}
          parameterName={"autostart"}
        />
      </Grid>
    </Grid>
  );
}
