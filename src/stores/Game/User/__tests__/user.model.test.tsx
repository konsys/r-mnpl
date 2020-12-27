import * as user from "../UserModel";

import * as http from "http/client";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    get: jest.fn().mockImplementation(() => ({
      data: "success",
    })),
  },
}));

describe("User model test", () => {
  beforeEach(() => {
    user.logout();
    jest.clearAllMocks();
  });
  it("should set user ", async () => {
    expect(user.user$.getState()).toBe(null);
    // @ts-ignore
    user.setUser("wrgewrfwerfwgerg");
    expect(user.user$.getState()).toBe("wrgewrfwerfwgerg");
    user.logout();
  });

  it("should get user from server", async () => {
    await user.getUserFx("me");
    expect(http.client.get).toBeCalledTimes(1);
    expect(http.client.get).toBeCalledWith("/users/profile", "me");
  });
});
