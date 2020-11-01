import { BoardDomain } from "./BoardDomain";
import { IField } from "../../types/types";
import { fetchInitFields } from "../../api/Fields/api";

export interface IFieldsStore {
  version: number;
  fields: IField[];
}
const FieldsDomain = BoardDomain.domain("BoardDomain");

export const closeFieldAction = FieldsDomain.event();

const waitForNumber = async (n: number): Promise<number> => {
  const store = fieldAction$.getState();
  if (n === store) {
    return n;
  }

  if (store > 0) {
    closeFieldAction();

    return new Promise((resolve) => {
      return setTimeout(() => resolve(n), 200);
    });
  }
  return n;
};

export const setFieldAction = FieldsDomain.event<number>();

export const setFieldActionFx = FieldsDomain.effect<number, number>({
  handler: waitForNumber,
});

export const fieldAction$ = FieldsDomain.store<number>(0)
  .on(setFieldActionFx.done, (_, data) => data.result)
  .on(setFieldAction, (_, data) => data)
  .on(closeFieldAction, () => 0);

export const resetFieldsEvent = FieldsDomain.event();
export const getInitFieldsFx = FieldsDomain.effect<void, IField[], Error>({
  handler: fetchInitFields,
});

export const setFieldsEvent = FieldsDomain.event<IFieldsStore>();

export const fields$ = FieldsDomain.store<IFieldsStore>({
  fields: [],
  version: 0,
})
  .on(getInitFieldsFx.done, (_, data) => ({
    fields: data.result,
    version: 1,
  }))
  .reset(resetFieldsEvent)

  .on(getInitFieldsFx.fail, (err: any) => console.error("error", err))
  .on(setFieldsEvent, (_, state: IFieldsStore) => state)
  .reset(resetFieldsEvent);

// fields$.watch((v) => console.log("fieldsStoreWatch", v.fields[1]));
//
