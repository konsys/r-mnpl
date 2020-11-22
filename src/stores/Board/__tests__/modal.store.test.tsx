import {
  initBoardAction,
  boardModal$,
  showBoardActionModal,
  resetBoardActionModal,
} from "../ModalStore";
describe("", () => {
  it("should set init", () => {
    expect(initBoardAction).toStrictEqual(boardModal$.getState());
  });

  it("should set modal", () => {
    // @ts-ignore
    showBoardActionModal({ test: 345345 });
    expect({ test: 345345 }).toStrictEqual(boardModal$.getState());
  });

  it("should reset init", () => {
    // @ts-ignore
    showBoardActionModal({ test: 345345 });
    resetBoardActionModal();
    expect(initBoardAction).toStrictEqual(boardModal$.getState());
  });
});
