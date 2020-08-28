import { RoomType, RoomTypeName } from "../../CreateGameModal";

import { Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ type }: { type: RoomType }) {
  const { t } = useTranslation();
  return (
    <Grid>
      {(type === RoomType.QUICK && t(RoomTypeName.QUICK)) ||
        (type === RoomType.REGULAR && t(RoomTypeName.REGULAR)) ||
        (type === RoomType.RETRO && t(RoomTypeName.RETRO)) ||
        (type === RoomType.SHUFFLE && t(RoomTypeName.SHUFFLE)) ||
        (type === RoomType.ROULETTE && t(RoomTypeName.ROULETTE))}
    </Grid>
  );
}
