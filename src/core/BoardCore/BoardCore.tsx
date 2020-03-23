import React, { useEffect } from "react";
import { Board } from "../../components/Board/Board";
import { GameDomain } from "../GameCore/GameModel";
import { BoardField } from "../../components/Field/Field";
import { client } from "../../http/client";
import { useStore } from "effector-react";

const URL = `/boardField/initial`;

async function fetchInitFields(params?: any): Promise<BoardField[]> {
  const res = await (await client.get(URL, params)).data;
  console.log("res", res);
  return res;
}

const BoardDomain = GameDomain.domain("BoardDomain");
export const resetFields = BoardDomain.event();
export const getInitFields = BoardDomain.effect<void, BoardField[], Error>({
  handler: fetchInitFields
});

export const fieldsStore = BoardDomain.store<BoardField[]>([])
  .on(getInitFields.done, (state, { result }) => {
    console.log("done", state);
    return result;
  })
  .on(getInitFields.fail, err => console.log("error", err))
  .reset(resetFields);

export const BoardCore = () => {
  useEffect(() => {
    getInitFields();
    return () => resetFields();
  }, []);
  const data = useStore(fieldsStore);
  console.log("data", data);
  return getInitFields.done ? <Board fields={data} /> : <>wait</>;
};
