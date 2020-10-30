import {
  RoomPortalFieldType,
  RoomType,
  RoomTypeName,
} from "stores/Game/Rooms/RoomsModel";

import Autorenew from "@material-ui/icons/Autorenew";
import CasinoIcon from "@material-ui/icons/Casino";
import EvStationIcon from "@material-ui/icons/EvStation";
import { Grid } from "@material-ui/core";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import RadioIcon from "@material-ui/icons/Radio";
import React from "react";
import RestoreIcon from "@material-ui/icons/Restore";
import RoomTypeView from "../RoomTypeView";
import SendIcon from "@material-ui/icons/Send";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { shallow } from "enzyme";
import { testRoom } from "testMocks/room";

describe("Room type view test", () => {
  it("should render", () => {
    expect(shallow(<RoomTypeView room={testRoom} />)).toMatchSnapshot();
  });

  it("should render className and icon", () => {
    let wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.REGULAR }} />
    );
    expect(wrap.find(Grid).get(1).props.className).toStrictEqual(
      RoomType.REGULAR
    );
    expect(wrap.find(VideogameAssetIcon)).toHaveLength(1);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.QUICK }} />
    );
    expect(wrap.find(Grid).get(1).props.className).toStrictEqual(
      RoomType.QUICK
    );
    expect(wrap.find(SendIcon)).toHaveLength(1);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.RETRO }} />
    );
    expect(wrap.find(Grid).get(1).props.className).toStrictEqual(
      RoomType.RETRO
    );
    expect(wrap.find(RadioIcon)).toHaveLength(1);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.ROULETTE }} />
    );
    expect(wrap.find(Grid).get(1).props.className).toStrictEqual(
      RoomType.ROULETTE
    );
    expect(wrap.find(LocationSearchingIcon)).toHaveLength(1);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.SHUFFLE }} />
    );
    expect(wrap.find(Grid).get(1).props.className).toStrictEqual(
      RoomType.SHUFFLE
    );
    expect(wrap.find(ShuffleIcon)).toHaveLength(1);
  });

  it("should render className and name", () => {
    let wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.REGULAR }} />
    );
    expect(wrap.find(Grid).get(2).props.className).toStrictEqual(
      RoomType.REGULAR
    );
    expect(wrap.find(Grid).get(2).props.children).toBe(RoomTypeName.REGULAR);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.QUICK }} />
    );
    expect(wrap.find(Grid).get(2).props.className).toStrictEqual(
      RoomType.QUICK
    );
    expect(wrap.find(Grid).get(2).props.children).toBe(RoomTypeName.QUICK);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.RETRO }} />
    );
    expect(wrap.find(Grid).get(2).props.className).toStrictEqual(
      RoomType.RETRO
    );
    expect(wrap.find(Grid).get(2).props.children).toBe(RoomTypeName.RETRO);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.ROULETTE }} />
    );
    expect(wrap.find(Grid).get(2).props.className).toStrictEqual(
      RoomType.ROULETTE
    );
    expect(wrap.find(Grid).get(2).props.children).toBe(RoomTypeName.ROULETTE);

    wrap = shallow(
      <RoomTypeView room={{ ...testRoom, roomType: RoomType.SHUFFLE }} />
    );
    expect(wrap.find(Grid).get(2).props.className).toStrictEqual(
      RoomType.SHUFFLE
    );
    expect(wrap.find(Grid).get(2).props.children).toBe(RoomTypeName.SHUFFLE);
  });

  it("should show restarts", () => {
    expect(
      shallow(<RoomTypeView room={{ ...testRoom, restarts: false }} />).find(
        RestoreIcon
      )
    ).toHaveLength(0);

    expect(
      shallow(<RoomTypeView room={{ ...testRoom, restarts: true }} />).find(
        RestoreIcon
      )
    ).toHaveLength(1);
  });

  it("should show autostart", () => {
    expect(
      shallow(<RoomTypeView room={{ ...testRoom, autostart: false }} />).find(
        Autorenew
      )
    ).toHaveLength(0);

    expect(
      shallow(<RoomTypeView room={{ ...testRoom, autostart: true }} />).find(
        Autorenew
      )
    ).toHaveLength(1);
  });

  it("should show private room", () => {
    expect(
      shallow(<RoomTypeView room={{ ...testRoom, privateRoom: false }} />).find(
        VisibilityOffIcon
      )
    ).toHaveLength(0);

    expect(
      shallow(<RoomTypeView room={{ ...testRoom, privateRoom: true }} />).find(
        VisibilityOffIcon
      )
    ).toHaveLength(1);
  });

  it("should show portal type", () => {
    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.NOP }}
        />
      ).find("._with-portal")
    ).toHaveLength(0);
    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.PORTAL }}
        />
      ).find("._with-portal")
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.NOP }}
        />
      ).find("._with-roulette")
    ).toHaveLength(0);
    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.NOP }}
        />
      ).find(CasinoIcon)
    ).toHaveLength(0);
    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.ROULETTE }}
        />
      ).find("._with-roulette")
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.ROULETTE }}
        />
      ).find(CasinoIcon)
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomTypeView
          room={{ ...testRoom, portalType: RoomPortalFieldType.NOP }}
        />
      ).find("._with-russian-roulette")
    ).toHaveLength(0);
    expect(
      shallow(
        <RoomTypeView
          room={{
            ...testRoom,
            portalType: RoomPortalFieldType.NOP,
          }}
        />
      ).find(EvStationIcon)
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomTypeView
          room={{
            ...testRoom,
            portalType: RoomPortalFieldType.RUSSIAN_ROULETTE,
          }}
        />
      ).find("._with-russian-roulette")
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomTypeView
          room={{
            ...testRoom,
            portalType: RoomPortalFieldType.RUSSIAN_ROULETTE,
          }}
        />
      ).find(EvStationIcon)
    ).toHaveLength(1);
  });
});
