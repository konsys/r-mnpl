import { testField } from "testMocks/field";
import * as fields from "../FieldsStore";
import * as http from "http/client";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),

  client: {
    get: jest.fn().mockImplementation(() => ({ data: [{ fieldId: 3246435 }] })),
  },
}));

describe("Contract store test", () => {
  beforeEach(() => {
    fields.resetFields();
    jest.clearAllMocks();
  });
  it("should have init fields state", async () => {
    const f = fields.fields$.getState();

    expect(f).toStrictEqual({ fields: [], version: 0 });
  });
  it("should set fields state", async () => {
    fields.setBoardFields({
      fields: [testField],
      version: 1,
    });
    const f = fields.fields$.getState();

    expect(f).toStrictEqual({
      fields: [testField],
      version: 1,
    });
  });

  it("should reset fields state", async () => {
    fields.setBoardFields({
      fields: [testField],
      version: 1,
    });
    let f = fields.fields$.getState();

    expect(f).toStrictEqual({
      fields: [testField],
      version: 1,
    });

    fields.resetFields();
    f = fields.fields$.getState();

    expect(f).toStrictEqual({ fields: [], version: 0 });
  });

  it("should get init fields", async () => {
    await fields.getInitFieldsFx();

    const f = fields.fields$.getState();

    expect(f).toStrictEqual({ version: 1, fields: [{ fieldId: 3246435 }] });
    expect(http.client.get).toHaveBeenCalledTimes(1);

    expect(http.client.get).toHaveBeenCalledWith("/fields/initial", undefined);
  });
});
