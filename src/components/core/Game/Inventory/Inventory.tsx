import { Grid } from "@material-ui/core";
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
        <Grid container>
          <Grid item>
            <Grid container>
              <Grid item>{user?.avatar}</Grid>
              <Grid item>{user?.name}</Grid>
              <Grid item>{t("Inventory")}</Grid>
              <Grid item></Grid>
            </Grid>
            1
          </Grid>
          <Grid item>2</Grid>
        </Grid>
      </Template>
    </>
  );
}
