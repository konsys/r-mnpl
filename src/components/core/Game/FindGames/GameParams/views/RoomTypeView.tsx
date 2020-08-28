import React from "react";
import { RoomType } from "../../CreateGameModal";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ type }: { type: RoomType }) {
  const { t } = useTranslation();
  return (
    <>
      {
        (type === RoomType.QUICK && t(RoomType.QUICK),
        type === RoomType.REGULAR && t(RoomType.REGULAR),
        type === RoomType.RETRO && t(RoomType.RETRO),
        type === RoomType.SHUFFLE && t(RoomType.SHUFFLE),
        type === RoomType.ROULETTE && t(RoomType.ROULETTE))
      }
    </>
  );
}
