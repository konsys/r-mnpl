import { loginFx, clearTokenStore } from "../../Login/LoginModel";
import {
  getToken,
  saveToken,
  clearToken,
  saveRefreshToken,
  clearRefreshToken,
  getRefreshToken,
} from "../TokenModel";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({
      data: {
        accessToken: "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg",
      },
    })),
  },
}));

describe("Token model test", () => {
  afterAll(() => {
    clearTokenStore();
    clearToken();
    clearRefreshToken();
  });
  beforeEach(() => {
    clearTokenStore();
    clearToken();
  });
  it("should get access token from store", async () => {
    await loginFx({
      email: "testemail@yandex.ru",
      password: "testPassword",
    });
    expect(getToken()).toBe("he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg");
  });

  it("should get access token from local storage", async () => {
    saveToken("he4rr3rtdsad563546g6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg");
    expect(getToken()).toBe(
      "he4rr3rtdsad563546g6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg"
    );
  });

  it("should return null on empty token", async () => {
    expect(getToken()).toStrictEqual(null);
  });

  it("should saveToken", async () => {
    expect(getToken()).toStrictEqual(null);
    saveToken("wefwgergefewrfewf");
    expect(getToken()).toStrictEqual("wefwgergefewrfewf");
  });

  it("should clearToken", async () => {
    saveToken("we33fwgergefewrfewf");
    expect(getToken()).toStrictEqual("we33fwgergefewrfewf");
    clearToken();

    expect(getToken()).toStrictEqual(null);
  });

  it("should set Refresh token", async () => {
    clearRefreshToken();
    expect(getRefreshToken()).toBe(null);
    saveRefreshToken("werg345yh4h4h4yh");
    expect(getRefreshToken()).toBe("werg345yh4h4h4yh");
    clearRefreshToken();
    expect(getRefreshToken()).toBe(null);
  });
});
