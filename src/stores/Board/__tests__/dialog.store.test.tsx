import { showDialog, dialog$, hideDialog } from "../DialogStore";

describe("Contract store test", () => {
  it("should ", () => {
    showDialog({
      title: "testTitle",
      message: "testMessage",
    });
    expect(dialog$.getState()).toStrictEqual({
      title: "testTitle",
      message: "testMessage",
    });
  });

  it("should ", () => {
    showDialog({
      title: "testTitle",
      message: "testMessage",
    });
    hideDialog();
    expect(dialog$.getState()).toStrictEqual({
      title: "",
      message: "",
    });
  });
});
