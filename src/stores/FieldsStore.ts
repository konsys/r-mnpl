import { BoardDomain } from "./BoardDomain";
import { BoardField } from "../components/views/Field/Field";
import { fetchInitFields } from "../components/core/BoardCore/Api";

export interface IFieldsStore {
  version: number;
  fields: BoardField[];
}
const FieldsDomain = BoardDomain.domain("BoardDomain");
export const resetFieldsEvent = FieldsDomain.event();
export const getInitFieldsEffect = FieldsDomain.effect<
  void,
  BoardField[],
  Error
>({
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

  .on(getInitFieldsEffect.fail, (err: any) => console.error("error", err))
  .on(setFieldsEvent, (_, state: IFieldsStore) => state)
  .reset(resetFieldsEvent);

// fieldsStore.watch((v) => console.log("fieldsStoreWatch", v));
