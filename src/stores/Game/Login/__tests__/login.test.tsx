import { loginFx, login$, clearTokenStore } from "../LoginModel";
import * as http from "http/client";
import * as user from "../../User/UserModel";
import { LocalStorageParams } from "types/types";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({
      data: {
        access_token: "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg",
      },
    })),
  },
}));

jest.mock("../../User/UserModel", () => ({
  getMyProfile: jest.fn(),
}));

describe("Login model test", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should login", async () => {
    expect(login$.getState()).toStrictEqual(null);
    await loginFx({
      email: "testemail@yandex.ru",
      password: "testPassword",
    });

    expect(http.client.post).toHaveBeenCalledTimes(1);
    expect(http.client.post).toHaveBeenCalledWith(`/users/auth/login`, {
      email: "testemail@yandex.ru",
      password: "testPassword",
    });
    expect(login$.getState()).toStrictEqual({
      access_token: "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg",
    });
  });

  it("should clear token", async () => {
    localStorage.setItem(
      LocalStorageParams.TOKEN,
      "wqedfwefqwefd45yt4ebaedfbgvergf"
    );
    expect(localStorage.getItem(LocalStorageParams.TOKEN)).toBe(
      "wqedfwefqwefd45yt4ebaedfbgvergf"
    );
    await loginFx({
      email: "testemail@yandex.ru",
      password: "testPassword",
    });

    expect(localStorage.getItem(LocalStorageParams.TOKEN)).toBe(
      "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg"
    );
  });

  it("should get profile", async () => {
    await loginFx({
      email: "testemail@yandex.ru",
      password: "testPassword",
    });
    expect(user.getMyProfile).toBeCalledTimes(1);
  });

  it("should reset login store", async () => {
    await loginFx({
      email: "testemail@yandex.ru",
      password: "testPassword",
    });
    expect(login$.getState()).toStrictEqual({
      access_token: "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg",
    });
    clearTokenStore();
    expect(login$.getState()).toStrictEqual(null);
  });
});
