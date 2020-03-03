import React from "react";
import { ActionPanel } from "../ActionPanel/ActionPanel";

interface Props {
  title: string;
  text: string;
  sum: number;
  turn: () => void;
}

// const turnAction = "";

export const TableAction = (props: Props) => (
  // <div className="TableAction">
  //   <div className="TableAction-top">
  //     <div className="TableAction-top-title">{props.title}</div>
  //     <div className="TableAction-top-text">
  //       <div>{props.text}</div>
  //     </div>
  //   </div>
  //   <ActionPanel text={`Бросить кубики ${props.sum}`} turn={props.turn} />
  // </div>
  <div className="TableAction">
    <div className="TableAction-top">
      <div className="TableAction-top-title">{props.title}</div>
      <div className="TableAction-top-text">
        <div>{props.text}</div>
      </div>
    </div>
    <div className="TableAction-buttons">
      <ActionPanel text={`Купить за 2,800k`} onClick={props.turn} />
      <ActionPanel text={`На аукцион`} onClick={props.turn} />
    </div>
  </div>
);
