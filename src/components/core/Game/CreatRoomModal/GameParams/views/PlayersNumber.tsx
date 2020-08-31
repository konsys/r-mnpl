import { Button, ButtonGroup, Grid } from "@material-ui/core";

import { IRoomSetup } from "components/core/Game/FindGames/FindGame";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PlayersNumber({
  setup,
  battleClosed,
}: {
  setup: IRoomSetup;
  battleClosed?: boolean;
}) {
  const { t } = useTranslation();
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
            color={setup.state.playersNumber === 2 ? "primary" : "default"}
            onClick={() => setup.setState({ ...setup.state, playersNumber: 2 })}
          >
            2
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={setup.state.playersNumber === 3 ? "primary" : "default"}
            onClick={() => setup.setState({ ...setup.state, playersNumber: 3 })}
          >
            3
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={setup.state.playersNumber === 4 ? "primary" : "default"}
            onClick={() => setup.setState({ ...setup.state, playersNumber: 4 })}
          >
            4
          </Button>
          <Button
            disabled={false}
            variant="contained"
            color={setup.state.playersNumber === 5 ? "primary" : "default"}
            onClick={() => setup.setState({ ...setup.state, playersNumber: 5 })}
          >
            5
          </Button>
          {!battleClosed && (
            <Button
              disabled={false}
              variant="contained"
              color={setup.state.playersNumber === 6 ? "primary" : "default"}
              onClick={() =>
                setup.setState({ ...setup.state, playersNumber: 6 })
              }
            >
              2x2
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
