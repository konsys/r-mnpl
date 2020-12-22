import { loginFx, clearTokenStore } from "../../Login/LoginModel";
import { getToken, saveToken, clearToken } from "../TokenModel";

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

describe("Token model test", () => {
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
});
