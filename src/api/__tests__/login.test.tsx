import { loginFx } from "stores/Game/Login/LoginModel";
import { getToken } from "stores/Game/Token/TokenModel";
import { user$, getUserFx, logout } from "stores/Game/User/UserModel";

describe("Login test", () => {
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
  });
});
