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
});
