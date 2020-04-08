import { MainDomain } from "./MainStore";
import { BoardField } from "../components/views/Field/Field";
import { fetchInitFields } from "../components/core/BoardCore/Api";

const BoardDomain = MainDomain.domain("BoardDomain");
export const resetFieldsEvent = BoardDomain.event();
export const getInitFieldsEffect = BoardDomain.effect<
  void,
  BoardField[],
  Error
>({
  handler: fetchInitFields,
});

export const fieldsStore = BoardDomain.store<BoardField[]>([])
  .on(getInitFieldsEffect.done, (_, { result }) => result)
  .on(getInitFieldsEffect.fail, (err) => console.error("error", err))
  .reset(resetFieldsEvent);
