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
