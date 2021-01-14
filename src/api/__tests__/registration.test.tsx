import { client } from "http/client";
import {
  registrationCodeFx,
  resendRegistrationEmailFx,
} from "stores/Game/Login/RegistrationModel";
import { getUserByEmailFx, registerFx } from "stores/Game/User/UserModel";
import { IUserRegistration } from "types/types";
const email1 = "registrationTestUser1@test.ru";
const email2 = "registrationTestUser2@test.ru";
const password = "password";
const name = "TestUserName";

const user: IUserRegistration = {
  isTestUser: true,
  password,
  name,
  vip: true,
};
jest.setTimeout(60000);

describe("Registration test", () => {
  // beforeEach(async () => {
  //   const { userId } = await getUserByEmailFx(email);
  //   userId && (await client.delete(`users/${userId}`));
  // });

  // afterEach(async () => {
  //   const { userId } = await getUserByEmailFx(email);
  //   userId && (await client.delete(`users/${userId}`));
  // });

  it("should register user", async () => {
    for await (let r of Array(5).fill(1)) {
      let res = await registerFx({ ...user, email: email2 });
      expect(res).not.toBeNull();

      // @ts-ignore
      expect(res.email).toStrictEqual(email2);

      const register = await registrationCodeFx({
        ...res,
      });
      expect(register).toBeTruthy();

      let deletedUser = await getUserByEmailFx(email2);
      await client.delete(`users/${deletedUser.userId}`);

      deletedUser = await getUserByEmailFx(email2);
    }
  });

  it("should resend registration code", async () => {
    let res = await registerFx({ ...user, email: email1 });
    expect(res).not.toBeNull();

    // @ts-ignore
    expect(res.email).toStrictEqual(email1);
    try {
      const register = await resendRegistrationEmailFx(res.email);
      expect(register).toBeTruthy();
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toBe(
        "Email send period not completed"
      );
    }
  });
});
