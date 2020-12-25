import { loginFx } from "stores/Game/Login/LoginModel";
import { getToken } from "stores/Game/Token/TokenModel";
import { user$, getUserFx } from "stores/Game/User/UserModel";

describe("Login test", () => {
  it("should login", async () => {
    await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
    expect(typeof getToken()).toBe("string");
    expect(getToken()?.length).toBeGreaterThan(10);
    await getUserFx("me");
    expect(user$.getState()?.name).toBe("TestUser");
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
    expect(typeof getToken()).toBe("string");
    expect(getToken()?.length).toBeGreaterThan(10);
  });
});
