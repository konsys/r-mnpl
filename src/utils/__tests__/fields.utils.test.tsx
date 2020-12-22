import { setBoardFields } from "stores/Board/FieldsStore";
import { createTurnsArray, getField } from "../fields.utils";
describe("Fields utils test", () => {
  it("should createTurnsArray on == 400", () => {
    const position = createTurnsArray(0, 400);
    expect(position).toStrictEqual([]);
  });

  it("should createTurnsArray on == 40", () => {
    const position = createTurnsArray(0, 40);
    expect(position).toStrictEqual([]);
  });

  it("should createTurnsArray on > 40", () => {
    const position = createTurnsArray(0, 41);
    expect(position).toStrictEqual([]);
  });

  it("should createTurnsArray on < 40", () => {
    const position = createTurnsArray(0, 10);
    expect(position).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should createTurnsArray from 30 to 2", () => {
    const position = createTurnsArray(30, 2);
    expect(position).toStrictEqual([
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      0,
      1,
      2,
    ]);
  });

  it("should getFields", () => {
    setBoardFields({
      // @ts-ignore
      fields: [{ fieldId: 1 }, { fieldId: 2 }, { fieldId: 3 }],
    });
    expect(getField(1)).toStrictEqual({ fieldId: 1 });
    expect(getField(2)).toStrictEqual({ fieldId: 2 });
    expect(getField(3)).toStrictEqual({ fieldId: 3 });
  });

  it("should return undefined on no field", () => {
    // @ts-ignore
    setBoardFields({
      // @ts-ignore
      fields: [{ fieldId: 1 }, { fieldId: 2 }, { fieldId: 3 }],
    });
    expect(getField(4)).toStrictEqual(undefined);
  });
});
