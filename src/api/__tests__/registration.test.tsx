import { client } from "http/client";
import {
  activateUserFx,
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

const after = async () => {
  let { userId } = await getUserByEmailFx(email1);
  userId && (await client.delete(`users/${userId}`));
  userId = 0;
  let u2 = await getUserByEmailFx(email2);
  u2.userId && (await client.delete(`users/${u2.userId}`));
};
describe("Registration test", () => {
  beforeAll(async () => await after());
  afterAll(async () => await after());

  it("should register user", async () => {
    try {
      for await (let r of Array(5).fill(1)) {
        let res = await registerFx({ ...user, email: email2 });
        expect(res).not.toBeNull();

        // @ts-ignore
        expect(res.email).toStrictEqual(email2);

        const register = await activateUserFx({
          ...res,
        });
        expect(register).toBeTruthy();

        const { userId } = await getUserByEmailFx(email2);
        userId && (await client.delete(`users/${userId}`));
      }
    } catch (error) {
      // expect(error).toStrictEqual("Email send period not completed");
      expect(error.response.data.message).toBe(
        "Email send period not completed"
      );
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
    const { userId } = await getUserByEmailFx(email1);
    userId && (await client.delete(`users/${userId}`));
  });
});
