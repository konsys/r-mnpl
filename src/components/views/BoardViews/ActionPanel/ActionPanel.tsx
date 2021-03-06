import React from "react";

export interface ActionPanelProps {
  text: string;
  disabled: boolean;
  onClick: (v: any) => any;
}
export const ActionPanel = (props: ActionPanelProps) => (
  <div
    className={props.disabled ? "_action _locked" : "_action"}
    onClick={props.onClick}
  >
    {props.text}
  </div>
);
