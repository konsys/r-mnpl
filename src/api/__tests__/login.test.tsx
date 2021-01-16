import { client } from "http/client";
import { loginFx } from "stores/Game/Login/LoginModel";
import { registrationCodeFx } from "stores/Game/Login/RegistrationModel";
import { getToken } from "stores/Game/Token/TokenModel";
import {
  user$,
  getUserFx,
  logout,
  getProfileFx,
  profile$,
  clearProfile,
  registerFx,
  getUserByEmailFx,
} from "stores/Game/User/UserModel";
import { IUserRegistration } from "types/types";

jest.setTimeout(60000);
const email = "loginTestUser@yandex.ru";
const password = "password";
const name = "TestUserName";

const user: IUserRegistration = {
  isTestUser: true,
  email,
  password,
  name,
  vip: true,
};

describe("Login test", () => {
  let userId = 0;

  beforeAll(async () => {
    const res = await registerFx({ ...user });
    await registrationCodeFx({
      ...res,
    });
    const newUser = await getUserByEmailFx(email);
    userId = newUser.userId;
  });

  afterAll(async () => {
    const { userId } = await getUserByEmailFx(email);
    userId && (await client.delete(`users/${userId}`));
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
    expect(curUser && curUser.userId).toBeGreaterThan(0);
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
    console.log("wfwefwefwefwef", userId);
    clearProfile();
    // @ts-ignore
    await getProfileFx(userId);
    // @ts-ignore
    expect(profile$.getState().name).toBe(name);
  });
});
