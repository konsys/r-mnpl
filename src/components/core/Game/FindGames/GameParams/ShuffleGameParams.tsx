import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../CreateGameModal";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { useTranslation } from "react-i18next";

export default function ShuffleGameParams({ setup }: { setup: IRoomSetup }) {
  const { t } = useTranslation();
  return (
    <>
      <Grid container direction="column" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant="h6">{t("GMS Shuffle")}</Typography>
        </Grid>
        <Grid item>
          <PlayersNumber setup={setup} />
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
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            вы играете со случайными карточками и кубиками;
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            выиграв три матча подряд, вы получаете один из этих предметов;
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            в случае поражения в матче вам придётся начинать турнир сначала.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
