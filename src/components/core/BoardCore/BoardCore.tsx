import React, { useEffect } from "react";
import { Board } from "../../views/Board/Board";
import { useStore } from "effector-react";
import {
  getInitFieldsEffect,
  resetFieldsEvent,
  fieldsStore,
} from "../../../stores/FieldsStore";

export const BoardCore = () => {
  useEffect(() => {
    getInitFieldsEffect();
    return () => resetFieldsEvent();
  }, []);
  const data = useStore(fieldsStore);
  return getInitFieldsEffect.done ? <Board fields={data} /> : <>wait</>;
};
