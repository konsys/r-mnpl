import { createEffect, createStore } from "effector";
import { client } from "http/client";
import { gameActionFx } from "stores/Board/ActionStore";
import { getToken } from "stores/Game/Token/TokenModel";
import { OutcomeMessageType } from "types/types";
import { loginFx } from "../../../stores/Game/Login/LoginModel";

describe("Board api test", () => {
  beforeAll(async () => {
    await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
  });

  it("should get token", async () => {
    expect(getToken()).not.toBeNull();
  });

  it("should return 400 with no params", async () => {
    try {
      // @ts-ignore
      await gameActionFx();
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  it("should return 400 with no params", async () => {
    try {
      // @ts-ignore
      await gameActionFx();
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.error).toBe("Bad Request");
      expect(error.response.data.message).toBe(
        "Action not found TypeError: Cannot read property 'action' of undefined"
      );
    }
  });
  //   action: IncomeMessageType;
  //   gameId: string;
  //   fieldId?: number;
  //   userId?: number;
  //   contract?: any;

  it("should return 400 with no userId", async () => {
    try {
      await gameActionFx({
        action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
        gameId: "testGameId",
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.error).toBe("Bad Request");
      expect(error.response.data.message).toBe(
        "Action not found TypeError: Cannot read property 'userId' of undefined"
      );
    }
  });

  it("should return 400 with no userId", async () => {
    try {
      await gameActionFx({
        action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
        gameId: "testGameId",
        userId: 1,
        fieldId: 10,
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.error).toBe("Bad Request");
      expect(error.response.data.message).toBe(
        "Action not found TypeError: Cannot read property 'userId' of undefined"
      );
    }
  });
});
