import CreateRoomModal from "../CreateRoomModal";
import React from "react";
import { closeRoomModal } from "stores/Game/Rooms/RoomsModalModel";
import { shallow } from "enzyme";

describe("Create room modal test", () => {
  it("should render", () => {
    expect(shallow(<CreateRoomModal />)).toMatchSnapshot();
  });

  it("should render", () => {
    closeRoomModal();
    expect(shallow(<CreateRoomModal />).find(".newRoom")).toHaveLength(1);
  });
});
