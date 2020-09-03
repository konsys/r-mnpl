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
      <img src={avatar} alt={name} />
    </>
  );
}
