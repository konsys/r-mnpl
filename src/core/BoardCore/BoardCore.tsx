import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { client } from "../../http/client";
import { BoardField } from "../../components/views/Field/Field";
import { GameDomain } from "../../stores/GameStore";
import { Board } from "../../components/views/Board/Board";

const URL = `/fields/initial`;

async function fetchInitFields(params?: any): Promise<BoardField[]> {
  return await (await client.get(URL, params)).data;
}

const BoardDomain = GameDomain.domain("BoardDomain");
export const resetFields = BoardDomain.event();
export const getInitFields = BoardDomain.effect<void, BoardField[], Error>({
  handler: fetchInitFields,
});

export const fieldsStore = BoardDomain.store<BoardField[]>([])
  .on(getInitFields.done, (_, { result }) => result)
  .on(getInitFields.fail, (err) => console.error("error", err))
  .reset(resetFields);

export const BoardCore = () => {
  useEffect(() => {
    getInitFields();
    return () => resetFields();
  }, []);
  const data = useStore(fieldsStore);
  return getInitFields.done ? <Board fields={data} /> : <>wait</>;
};
