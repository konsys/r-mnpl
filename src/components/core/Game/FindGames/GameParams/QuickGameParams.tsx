import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../CreateGameModal";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { useTranslation } from "react-i18next";

export default function QuickGameParams({ setup }: { setup: IRoomSetup }) {
  const { t } = useTranslation();

  return (
    <Grid container direction="column" spacing={GRID_SPACING}>
      <Grid item>
        <Typography variant="h6">{t("Quick game")}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t(
            "Тут действуют особые правила, ускоряющие классические матчи, например, невероятный третий кубик с бонусами и триплами, а также сокращённые таймеры."
          )}
          <br />
          <br />
          {t(
            "Если вам интересно разобраться в правилах быстрой игры, прочитайте пост в нашем блоге."
          )}
        </Typography>
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
        <RoomSwitch
          setup={setup}
          text={"Game restarts"}
          parameterName={"restarts"}
        />
      </Grid>
    </Grid>
  );
}
