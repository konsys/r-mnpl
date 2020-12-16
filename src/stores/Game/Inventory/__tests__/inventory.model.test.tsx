import { inventory$, setInventory, getInventoryFx } from "../InventoryModel";
import * as http from "http/client";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    get: jest.fn().mockImplementation(() => ({
      data: "he4rr3rtg645rqwe6gerg",
    })),
  },
}));

describe("Test inventory model", () => {
  beforeEach(() => {
    setInventory(null);
  });
  it("should set inventory", () => {
    expect(inventory$.getState()).toStrictEqual(null);
    // @ts-ignore
    setInventory(2342675734);
    expect(inventory$.getState()).toStrictEqual(2342675734);
  });

  it("should get inventory", async () => {
    await getInventoryFx(7535);
    expect(http.client.get).toHaveBeenCalledTimes(1);
    expect(http.client.get).toHaveBeenCalledWith(`/inventory/${7535}`);
    expect(inventory$.getState()).toStrictEqual("he4rr3rtg645rqwe6gerg");
  });
});
