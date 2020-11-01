import * as board from "stores/Game/Board/BoardModel";
import * as contract from "stores/Board/ContractStore";

import { PlayerActions } from "../PlayerActions";
import React from "react";
import { shallow } from "enzyme";
import { testPlayerAction } from "testMocks/player.action";

describe("Room top five test", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render", () => {
    expect(shallow(<PlayerActions {...testPlayerAction} />)).toMatchSnapshot();
  });

  it("should render props", () => {
    let wrap = shallow(<PlayerActions {...testPlayerAction} profile={false} />);
    expect(wrap.find("._profile")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} profile={true} />);
    expect(wrap.find("._profile")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} ignore={false} />);
    expect(wrap.find("._ignore")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} ignore={true} />);
    expect(wrap.find("._ignore")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} ignoreOff={false} />);
    expect(wrap.find("._ignore_off")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} ignoreOff={true} />);
    expect(wrap.find("._ignore_off")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} report={false} />);
    expect(wrap.find("._report")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} report={true} />);
    expect(wrap.find("._report")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} restart={false} />);
    expect(wrap.find("._restart")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} restart={true} />);
    expect(wrap.find("._restart")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} creditTake={false} />);
    expect(wrap.find("._credit_take")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} creditTake={true} />);
    expect(wrap.find("._credit_take")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} creditPay={false} />);
    expect(wrap.find("._credit_pay")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} creditPay={true} />);
    expect(wrap.find("._credit_pay")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} leave={false} />);
    expect(wrap.find("._leave")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} leave={true} />);
    expect(wrap.find("._leave")).toHaveLength(1);

    wrap = shallow(<PlayerActions {...testPlayerAction} kick={false} />);
    expect(wrap.find("._kick")).toHaveLength(0);
    wrap = shallow(<PlayerActions {...testPlayerAction} kick={true} />);
    expect(wrap.find("._kick")).toHaveLength(1);
  });

  it("tests player can leave", () => {
    const testLeave = jest.spyOn(board, "surrenderRoom");
    let wrap = shallow(<PlayerActions {...testPlayerAction} leave={true} />);
    expect(wrap.find("._leave")).toHaveLength(1);
    wrap.find("._leave").simulate("click");
    expect(testLeave).toHaveBeenCalledTimes(1);
  });

  it("tests player can send contract", () => {
    const testContract = jest.spyOn(contract, "openContractModal");
    let wrap = shallow(
      <PlayerActions
        {...testPlayerAction}
        contract={true}
        fromUserId={159}
        toUserId={7563}
      />
    );
    expect(wrap.find("._contract")).toHaveLength(1);
    wrap.find("._contract").simulate("click");
    expect(testContract).toHaveBeenCalledTimes(1);
    expect(testContract).toHaveBeenCalledWith({
      fromUserId: 159,
      toUserId: 7563,
    });
  });
});
