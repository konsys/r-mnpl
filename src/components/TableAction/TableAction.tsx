import React from "react";
import { ActionPanel } from "../ActionPanel/ActionPanel";

interface TableActions {
  title: string;
  onClick: () => void;
}
interface Props {
  title: string;
  text: string;
  sum: number;
  actions: TableActions[];
}

// const turnAction = "";

export const TableAction = (props: Props) => (
  <div className="TableAction">
    <div className="TableAction-top">
      <div className="TableAction-top-title">{props.title}</div>
      <div className="TableAction-top-text">
        <div>{props.text}</div>
      </div>
    </div>
    <div className="TableAction-buttons">
      {props.actions.map(action => (
        <ActionPanel text={action.title} onClick={action.onClick} />
      ))}
    </div>
  </div>
);
