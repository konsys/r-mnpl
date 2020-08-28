import { RoomType, RoomTypeName } from "../CreateGameModal";

import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ type }: { type: RoomType }) {
  const { t } = useTranslation();
  let name = "";
  let className = "";
  switch (type) {
    case RoomType.QUICK:
      name = RoomTypeName.QUICK;
      className = RoomType.QUICK;
      break;
  }
  return <Typography className={className}>{t(name)}</Typography>;
}
// #root > div.MuiBox-root.MuiBox-root-2.games-template > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-8 > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div.MuiGrid-root.newRoomOneParams.MuiGrid-item
