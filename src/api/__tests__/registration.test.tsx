import {
  registrationCodeFx,
  resendRegistrationEmailFx,
} from "stores/Game/Login/RegistrationModel";
import { register$, registerFx } from "stores/Game/User/UserModel";
import { IUserRegistration } from "types/types";
const email = "TestUser1@yandex.ru";
const password = "password";
const name = "TestUserName";

const user: IUserRegistration = {
  userId: 1,
  email,
  password,
  name,
  vip: true,
};

describe("Registration test", () => {
  it("should register user", async () => {
    try {
      await registerFx({ ...user });

      const reg = register$.getState();
      expect(reg).not.toBeNull();
      // @ts-ignore
      expect(reg.email).toStrictEqual(user.email);
    } catch (error) {
      //   expect(error.response.status).toStrictEqual(400);
      expect(error).toStrictEqual(400);
    }
  });

  it("should send registration code", async () => {
    try {
      await registrationCodeFx({ registrationCode: "wefwefwef", email });
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  it("should resend registration code", async () => {
    try {
      await resendRegistrationEmailFx(email);
      await resendRegistrationEmailFx(email);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
