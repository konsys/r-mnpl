import React from "react";
import { profileGate } from "stores/Game/UserStore";
import { useGate } from "effector-react";

export default function Profile(props: any) {
  useGate(profileGate);
  return <>{props.children}</>;
}
