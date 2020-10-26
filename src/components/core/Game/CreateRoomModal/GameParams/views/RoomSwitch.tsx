import { Grid, Switch } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../../theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoomSwitch({
  text,
  name,
  checked,
  onChange,
  disabled,
}: {
  text: string;
  name: string;
  checked: boolean;
  onChange: (name: string) => void;
  disabled: boolean;
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
          disabled={disabled}
          color="primary"
          checked={checked}
          onChange={() => onChange(name)}
          name={name}
          inputProps={{ "aria-label": name }}
        />
      </Grid>
    </Grid>
  );
}
