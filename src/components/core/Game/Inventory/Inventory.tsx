import "./inventory.scss";

import { Button, Grid, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import { Params } from "config/params";
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
          alignItems="center"
          justify="space-between"
          direction="row"
          className={"inventory"}
        >
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <div className="avatar">
                  {user?.avatar && (
                    <Link to={`/profile/${user.userId}`}>
                      <img
                        alt={user.name}
                        src={Params.BASE_URL + "/" + user.avatar}
                      />
                    </Link>
                  )}
                </div>
              </Grid>
              <Grid item>
                <Link to={`/profile/${user?.userId}`}>
                  <Typography className="profileName">
                    {(user && user.name.toUpperCase()) || ""}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>{">"}</Grid>
              <Grid item>{t("Inventory")}</Grid>
              <Grid item>
                <Typography color="textSecondary">12</Typography>
              </Grid>
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
