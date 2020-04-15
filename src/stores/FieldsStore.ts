import { BoardDomain } from "./BoardDomain";
import { BoardField } from "../components/views/Field/Field";
import { fetchInitFields } from "../components/core/BoardCore/Api";

const FieldsDomain = BoardDomain.domain("BoardDomain");
export const resetFieldsEvent = FieldsDomain.event();
export const getInitFieldsEffect = FieldsDomain.effect<
  void,
  BoardField[],
  Error
>({
  handler: fetchInitFields,
});

export const fieldsStore = FieldsDomain.store<BoardField[]>([])
  .on(getInitFieldsEffect.done, (_, { result }) => result)
  .on(getInitFieldsEffect.fail, (err) => console.error("error", err))
  .reset(resetFieldsEvent);

fieldsStore.watch((v) => console.log(1111111111111, v));
