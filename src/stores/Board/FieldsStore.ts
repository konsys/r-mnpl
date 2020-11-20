import { BoardDomain } from "./BoardDomain";
import { IField } from "../../types/types";
import { fetchInitFields } from "../../api/Fields/api";

export interface IFieldsStore {
  version: number;
  fields: IField[];
}
export const FieldsDomain = BoardDomain.domain("BoardDomain");
export const resetFields = FieldsDomain.event();
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
  .on(getInitFieldsFx.fail, (err: any) => console.error("error", err))
  .on(setFieldsEvent, (_, state: IFieldsStore) => state)
  .reset(resetFields);

// fields$.watch((v) => console.log("fieldsStoreWatch", v.fields[1]));
//
