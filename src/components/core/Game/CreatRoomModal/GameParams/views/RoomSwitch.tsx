import { Grid, Switch } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoomSwitch({
  text,
  name,
  onChange,
}: {
  text: string;
  name: string;
  onChange: (name: string) => void;
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
          checked={false}
          onChange={() => onChange(name)}
          name={name}
          inputProps={{ "aria-label": name }}
        />
      </Grid>
    </Grid>
  );
}
