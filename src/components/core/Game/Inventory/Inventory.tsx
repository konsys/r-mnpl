import { Button, Grid } from "@material-ui/core";

import React from "react";
import Template from "components/views/Template/Template";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";
import { user$ } from "stores/Game/User/UserModel";

export default function Inventory() {
  const user = useStore(user$);
  const { t } = useTranslation();
  return (
    <>
      <Template columns={1} title={"Inventory"}>
        <Grid
          container
          alignContent="flex-start"
          alignItems="center"
          justify="center"
          direction="row"
          style={{ border: "2px solid red" }}
        >
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>{user?.avatar}</Grid>
              <Grid item>{user?.name}</Grid>
              <Grid item>{">"}</Grid>
              <Grid item>{t("Inventory")}</Grid>
              <Grid item>12</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              {t("Exchange offers")}
            </Button>
          </Grid>
        </Grid>
      </Template>
    </>
  );
}
