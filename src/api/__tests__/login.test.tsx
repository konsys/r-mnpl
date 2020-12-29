import { loginFx } from "stores/Game/Login/LoginModel";
import { getToken } from "stores/Game/Token/TokenModel";
import {
  user$,
  getUserFx,
  logout,
  getProfileFx,
  profile$,
  clearProfile,
  registerFx,
  register$,
} from "stores/Game/User/UserModel";
import { IUserRegistration } from "types/types";

jest.setTimeout(60000);
const email = "TestUser1@yandex.ru";
const password = "password";
const name = "TestUserName";

describe("Login test", () => {
  beforeEach(() => {
    // logout();
  });

  it("should update user", async () => {
    const user: IUserRegistration = {
      userId: 1,
      email,
      password,
      name,
      vip: true,
    };
    try {
      // @ts-ignore
      await registerFx(user);
      // @ts-ignore
      expect(register$.getState().name).toStrictEqual(user.name);
    } catch (err) {
      expect(err).toStrictEqual(1);
    }
  });
  it("should login", async () => {
    await loginFx({ email, password });
    expect(typeof getToken()).toBe("string");
    expect(getToken()?.length).toBeGreaterThan(10);
    await getUserFx();
    const userName = user$.getState()?.name;
    expect(userName).toBeDefined();
    expect(userName).toBe(name);
  });

  it("should not login", async () => {
    try {
      await loginFx({ email, password });
    } catch (error) {
      expect(error.response.status).toBe(401);
    }
  });

  it("should logout", async () => {
    await loginFx({ email, password });
    expect(getToken()).not.toBeNull();
    logout();
    expect(getToken()).toBeNull();
  });

  it("should get profile", async () => {
    await loginFx({
      email,
      password,
    });
    await getUserFx();
    const curUser = user$.getState();
    expect(curUser && curUser.name).toBe(name);
    expect(curUser && curUser.userId).toBe(1);
    // @ts-ignore
    await getProfileFx(curUser.userId);
    // @ts-ignore
    expect(profile$.getState().name).toBe(name);
  });

  it("should get another profile with id", async () => {
    await loginFx({
      email,
      password,
    });
    clearProfile();
    // @ts-ignore
    await getProfileFx(1);
    // @ts-ignore
    expect(profile$.getState().name).toBe(name);
  });
});
