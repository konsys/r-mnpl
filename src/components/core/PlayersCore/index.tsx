import React from "react";
import { RouteComponentProps } from "@reach/router";
import openSocket from "socket.io-client";
export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

//TODO unused now, is it needed?
export const Game = (props: Props) => {
  return <>GAME</>;
};
