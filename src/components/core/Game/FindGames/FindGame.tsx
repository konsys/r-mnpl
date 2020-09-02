import "./styles.scss";

import { Button, Divider, Grid, Typography } from "@material-ui/core";
import {
  newRoomStore,
  toggleRoomSwitch,
} from "stores/Game/models/NewRoomStore";

import { BLOCK_SPACING } from "../../../../theme";
import CreateGameModal from "../CreatRoomModal/CreateGameModal";
import NewRoomBlock from "./NewRoom/NewRoomBlock";
import React from "react";
import Template from "../../../views/Template/Template";
import { openRoomModal } from "stores/Game/models/RoomModalStore";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export const roomSwitchChange = (name: string) => {
  toggleRoomSwitch(name);
};

export const FindGame = () => {
  const room = useStore(newRoomStore);

  const { t } = useTranslation();

  return (
    <div className="findGame">
      <CreateGameModal />

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
                onClick={() => openRoomModal()}
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
            <NewRoomBlock room={room} />
          </Grid>
        </Grid>
      </Template>
    </div>
  );
};
