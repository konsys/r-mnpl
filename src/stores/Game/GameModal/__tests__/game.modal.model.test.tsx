import { closeGameModal, gameModal$, openGameModal } from "../GameModalModel";

describe("Game modal model test", () => {
  it("should open modal", () => {
    openGameModal({
      title: "testTitle",
      text: "testText",
    });
    expect(gameModal$.getState()).toStrictEqual({
      title: "testTitle",
      text: "testText",
    });
  });

  it("should close modal", () => {
    openGameModal({
      title: "testTitle",
      text: "testText",
    });
    expect(gameModal$.getState()).toStrictEqual({
      title: "testTitle",
      text: "testText",
    });
    closeGameModal();
    expect(gameModal$.getState()).toStrictEqual({
      title: "",
      text: "",
    });
  });
});
