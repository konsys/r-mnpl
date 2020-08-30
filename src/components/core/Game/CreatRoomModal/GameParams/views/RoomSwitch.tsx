import { Grid, Switch } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../../theme";
import { IRoomSetup } from "../../CreateGameModal";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoomSwitch({
  setup,
  text,
  parameterName,
}: {
  setup: IRoomSetup | any;
  text: string;
  parameterName: any;
}) {
  const { t } = useTranslation();

  return (
    <Grid
      container
      justify="space-between"
      spacing={GRID_SPACING}
      alignItems="center"
    >
      <Grid item>{t(text)}</Grid>
      <Grid item>
        <Switch
          color="primary"
          checked={setup.state[parameterName]}
          onChange={() =>
            setup.setState({
              ...setup.state,
              [parameterName]: !setup.state[parameterName],
            })
          }
          name={parameterName}
          inputProps={{ "aria-label": parameterName }}
        />
      </Grid>
    </Grid>
  );
}
