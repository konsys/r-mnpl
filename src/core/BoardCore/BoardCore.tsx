import React from "react";
import { Board } from "../../components/Board/Board";
import { GameDomain } from "../GameCore/GameModel";
import { BoardField } from "../../components/Field/Field";
import { client } from "../../http/client";

const API_URL = "api/v1/blacklist";

async function fetchInitFields(params?: any): Promise<BoardField> {
  return (await client.post(`${API_URL}/query`, params)).data;
}

const BoardDomain = GameDomain.createDomain("BoardDomain");
export const resetFields = BoardDomain.createEvent();
export const getInitFields = BoardDomain.createEffect();

export const fieldsStore = BoardDomain.store<BoardField[]>([])
  .on(getInitFields.done, v => v)
  .reset(resetFields);
//   .on(changeTokenPosition.done, (_, v) => v.result)
//   .reset(resetTokens);

getInitFields.use(fetchInitFields);

export const BoardCore = () => <Board fields={[]} />;

fieldsStore.watch(v => console.log(1111, v));
