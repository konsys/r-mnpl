import { Params } from "config/params";
import React from "react";

export default function RoomAvatar({
  avatar,
  name,
}: {
  avatar: string;
  name: string;
}) {
  return (
    <>
      <img src={`${Params.BASE_URL}/${avatar}`} alt={name} />
    </>
  );
}
