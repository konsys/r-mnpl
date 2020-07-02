import { BoardDomain } from "./BoardDomain";
import { fetchInitFields } from "../components/core/BoardCore/Api";
import { IField } from "../types/types";

export interface IFieldsStore {
  version: number;
  fields: IField[];
}
const FieldsDomain = BoardDomain.domain("BoardDomain");

const waitForNumber = async (n: number): Promise<number> => {
  const store = fieldActionStore.getState();
  if (n === store) {
    return n;
  }
  if (store) {
    setFieldActionEvent(0);

    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(n), 200);
    });
  }
  return n;
};

export const resetFieldActionEvent = FieldsDomain.event();
export const setFieldActionEvent = FieldsDomain.event<number>();
export const setFieldActionEffect = FieldsDomain.effect<number, number>({
  handler: waitForNumber,
});

export const fieldActionStore = FieldsDomain.store<number>(0)
  .on(setFieldActionEffect.done, (_, data) => {
    console.log(11111, data);
    return data.result;
  })
  .on(setFieldActionEvent, (_, data) => data)
  .reset(resetFieldActionEvent);

export const resetFieldsEvent = FieldsDomain.event();
export const getInitFieldsEffect = FieldsDomain.effect<void, IField[], Error>({
  handler: fetchInitFields,
});

export const setFieldsEvent = FieldsDomain.event<IFieldsStore>();

export const fieldsStore = FieldsDomain.store<IFieldsStore>({
  fields: [],
  version: 0,
})
  .on(getInitFieldsEffect.done, (_, data) => ({
    fields: data.result,
    version: 1,
  }))
  .reset(resetFieldsEvent)

  .on(getInitFieldsEffect.fail, (err: any) => console.error("error", err))
  .on(setFieldsEvent, (_, state: IFieldsStore) => state)
  .reset(resetFieldsEvent);

// fieldsStore.watch((v) => onsole.log("fieldsStoreWatch", v));
