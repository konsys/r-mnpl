import { FieldsDomain } from "./FieldsStore";

export const closeFieldAction = FieldsDomain.event();

export const waitForNumber = async (n: number): Promise<number> => {
  const store = fieldAction$.getState();

  if (store > 0 && n !== store) {
    closeFieldAction();

    return new Promise((resolve) => {
      return setTimeout(() => resolve(n), 200);
    });
  }
  console.log(234234234, n);
  return Promise.resolve(n);
};

export const setFieldAction = FieldsDomain.event<number>();
export const setFieldActionFx = FieldsDomain.effect<number, number>({
  handler: waitForNumber,
});

export const fieldAction$ = FieldsDomain.store<number>(0)
  .on(setFieldActionFx.done, (_, data) => data.result)
  .on(setFieldAction, (_, data) => data)
  .on(closeFieldAction, () => 0);
