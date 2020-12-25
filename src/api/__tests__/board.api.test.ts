import { loginFx } from "stores/Game/Login/LoginModel";
describe("Board api test", () => {
  it("should ", () => {});
  // beforeAll(async () => {
  //   try {
  //     await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
  //   } catch (err) {}
  // });

  // it("should login", async () => {
  //   try {
  //     await loginFx({ email: "TestUser1@yandex.ru", password: "password" });
  //   } catch (err) {}
  //   expect(getToken()).not.toBeNull();
  // });

  // it("should create game", async () => {
  //   await getRoomFx(testCreateRoom.roomId);
  //   let room = boardGame$.getState();
  //   if (!room) {
  //     await createRoomFx(testCreateRoom);
  //     room = boardGame$.getState();
  //   }
  //   expect(room).toBeDefined();

  //   await getRoomsFx();
  //   const { rooms } = rooms$.getState();
  //   expect(rooms.find((v) => v.roomId === testCreateRoom.roomId)).toBeDefined();
  // });

  // it("should return 400 with no params", async () => {
  //   try {
  //     // @ts-ignore
  //     await gameActionFx();
  //   } catch (error) {
  //     expect(error.response.status).toBe(400);
  //   }
  // });

  // it("should return 400 with no params", async () => {
  //   try {
  //     // @ts-ignore
  //     await gameActionFx();
  //   } catch (error) {
  //     expect(error.response.status).toBe(400);
  //     expect(error.response.data.error).toBe("Bad Request");
  //     expect(error.response.data.message).toBe(
  //       "Action not found TypeError: Cannot read property 'action' of undefined"
  //     );
  //   }
  // });
  // //   action: IncomeMessageType;
  // //   gameId: string;
  // //   fieldId?: number;
  // //   userId?: number;
  // //   contract?: any;

  // it("should return 400 with no userId", async () => {
  //   try {
  //     await gameActionFx({
  //       action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
  //       gameId: "testGameId",
  //     });
  //   } catch (error) {
  //     expect(error.response.status).toBe(400);
  //     expect(error.response.data.error).toBe("Bad Request");
  //     expect(error.response.data.message).toBe(
  //       "Action not found TypeError: Cannot read property 'userId' of undefined"
  //     );
  //   }
  // });

  // it("should return 400 with no userId", async () => {
  //   try {
  //     await gameActionFx({
  //       action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
  //       gameId: "testGameId",
  //       userId: 1,
  //       fieldId: 10,
  //     });
  //   } catch (error) {
  //     expect(error.response.status).toBe(400);
  //     expect(error.response.data.error).toBe("Bad Request");
  //     expect(error.response.data.message).toBe(
  //       "Action not found TypeError: Cannot read property 'userId' of undefined"
  //     );
  //   }
  // });
});
