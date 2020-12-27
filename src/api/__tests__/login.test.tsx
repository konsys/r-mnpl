import { loginFx } from "stores/Game/Login/LoginModel";
import { getToken } from "stores/Game/Token/TokenModel";
import {
  user$,
  getUserFx,
  logout,
  getProfileFx,
  profile$,
  clearProfile,
} from "stores/Game/User/UserModel";

jest.setTimeout(60000);

describe("Login test", () => {
  beforeEach(() => {
    // logout();
  });

  it("should login", async () => {
    await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
    expect(typeof getToken()).toBe("string");
    expect(getToken()?.length).toBeGreaterThan(10);
    await getUserFx();
    const name = user$.getState()?.name;
    expect(name).toBeDefined();
    expect(name).toBe("TestUser");
  });

  it("should not login", async () => {
    try {
      await loginFx({ email: "TestUser1111@yandex.ru", password: "password" });
    } catch (error) {
      expect(error.response.status).toBe(401);
    }
  });

  it("should logout", async () => {
    await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
    expect(getToken()).not.toBeNull();
    logout();
    expect(getToken()).toBeNull();
  });

  it("should get profile", async () => {
    await loginFx({
      email: "TestUser1@yandex.ru",
      password: "password",
    });
    await getUserFx();
    const user = user$.getState();
    expect(user && user.name).toBe("TestUser");
    expect(user && user.userId).toBe(1);
    // @ts-ignore
    await getProfileFx(user.userId);
    // @ts-ignore
    expect(profile$.getState().name).toBe("TestUser");
  });

  it("should get another profile with id", async () => {
    await loginFx({
      email: "TestUser1@yandex.ru",
      password: "password",
    });
    clearProfile();
    // @ts-ignore
    await getProfileFx(2);
    // @ts-ignore
    expect(typeof profile$.getState().name).toBe("string");
  });
});
