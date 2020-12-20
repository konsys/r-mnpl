import { Button, ButtonGroup, Grid } from "@material-ui/core";
import {
  preparatoryRoom$,
  setPreparatoryRoom,
} from "stores/Game/Rooms/RoomsModel";

import React from "react";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function PlayersNumber({
  battleClosed,
  isVip,
}: {
  battleClosed?: boolean;
  isVip: boolean;
}) {
  const { t } = useTranslation();
  const room = useStore(preparatoryRoom$);
  return (
    <Grid
      container
      spacing={1}
      justify="space-between"
      alignItems="center"
      direction="row"
    >
      <Grid item>{t("Players")}</Grid>
      <Grid item className="playersNumber">
        <ButtonGroup disableElevation>
          <Button
            size="small"
            disabled={false}
            variant="contained"
            color={room.playersNumber === 2 ? "primary" : "default"}
            onClick={() => setPreparatoryRoom({ ...room, playersNumber: 2 })}
          >
            2
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={room.playersNumber === 3 ? "primary" : "default"}
            onClick={() => setPreparatoryRoom({ ...room, playersNumber: 3 })}
          >
            3
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={room.playersNumber === 4 ? "primary" : "default"}
            onClick={() => setPreparatoryRoom({ ...room, playersNumber: 4 })}
          >
            4
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={room.playersNumber === 5 ? "primary" : "default"}
            onClick={() => setPreparatoryRoom({ ...room, playersNumber: 5 })}
          >
            5
          </Button>
          {!battleClosed && (
            <Button
              disabled={!isVip}
              variant="contained"
              color={room.playersNumber === 6 ? "primary" : "default"}
              onClick={() => setPreparatoryRoom({ ...room, playersNumber: 6 })}
            >
              2x2
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
