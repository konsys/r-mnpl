import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { BLOCK_SPACING } from "../../../../theme";
import CreateGameModal from "../CreatRoomModal/CreateGameModal";
import RoomAvatar from "./NewRoom/RoomAvatar";
import RoomTypeView from "./NewRoom/RoomTypeView";
import Template from "../../../views/Template/Template";
import { openModal } from "../../../../stores/Game/GameModalStore";
import { useTranslation } from "react-i18next";

export interface IRoomSetup {
  state: IRoomState;
  setState: (n: IRoomState) => void;
}
export enum RoomPortalFieldType {
  PORTAL = "Portal",
  NOP = "Empty field",
  ROULETTE = "Roulette",
  RUSSIAN_ROULETTE = "Russian roulette",
}

export enum RoomType {
  REGULAR = "regular",
  RETRO = "retro",
  SHUFFLE = "shuffle",
  QUICK = "quick",
  ROULETTE = "roulette",
}

export enum RoomTypeName {
  REGULAR = "Regular game",
  RETRO = "Retro",
  SHUFFLE = "GMS Shuffle",
  QUICK = "Quick game",
  ROULETTE = "Russian roulette",
}

export interface IRoomState {
  creatorId: number;
  roomType: RoomType;
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
  restarts: boolean;
  portalType: RoomPortalFieldType;
}
export const FindGame = () => {
  const [state, setState] = useState<IRoomState>({
    creatorId: 0,
    roomType: RoomType.REGULAR,
    autostart: true,
    restarts: false,
    playersNumber: 4,
    privateRoom: false,
    portalType: RoomPortalFieldType.ROULETTE,
  });

  const { t } = useTranslation();

  const createRoom = () => {};
  return (
    <div className="findGame">
      <CreateGameModal setup={{ state, setState }} createRoom={createRoom} />

      <Template columns={2} title={"Find games"}>
        <Grid
          container
          justify="space-between"
          spacing={BLOCK_SPACING}
          direction="row"
        >
          <Grid item>
            <Typography variant="h6">{t("Waiting for games")}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => openModal()}
              >
                {t("Create game")}
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          direction="column"
          spacing={BLOCK_SPACING}
        >
          <Grid item>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          direction="column"
          spacing={BLOCK_SPACING}
        >
          <Grid item>
            <Grid
              container
              justify="center"
              direction="column"
              spacing={1}
              className="newRoomOne"
            >
              <Grid item className="newRoomOneParams">
                <RoomTypeView type={state.roomType} roomParams={state} />
              </Grid>
              <Grid item className="newRoomOnePlayers">
                <Grid container justify="center" direction="column" spacing={1}>
                  <Grid className="newRoomOneAvatar">
                    <RoomAvatar />
                  </Grid>
                  <Grid className="newRoomOneAvatar">
                    <RoomAvatar />
                  </Grid>
                  <Grid className="newRoomOneAvatar">
                    <RoomAvatar />
                  </Grid>
                  <Grid className="newRoomOneAvatar">
                    <RoomAvatar />
                  </Grid>
                  <Grid className="newRoomOneAvatar">
                    <RoomAvatar />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Template>
    </div>
  );
};
