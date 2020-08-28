import { RoomType, RoomTypeName } from "../CreateGameModal";

import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ type }: { type: RoomType }) {
  const { t } = useTranslation();
  let name = "";
  let className = "";
  switch (type) {
    case RoomType.REGULAR:
      name = RoomTypeName.REGULAR;
      className = RoomType.REGULAR;
      break;
    case RoomType.QUICK:
      name = RoomTypeName.QUICK;
      className = RoomType.QUICK;
      break;
    case RoomType.RETRO:
      name = RoomTypeName.RETRO;
      className = RoomType.RETRO;
      break;
    case RoomType.ROULETTE:
      name = RoomTypeName.ROULETTE;
      className = RoomType.ROULETTE;
      break;
    case RoomType.SHUFFLE:
      name = RoomTypeName.SHUFFLE;
      className = RoomType.SHUFFLE;
      break;
  }
  return <Typography className={className}>{t(name)}</Typography>;
}
