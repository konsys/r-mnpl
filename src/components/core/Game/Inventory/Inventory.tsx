import "./inventory.scss";

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";

import { GRID_SPACING } from "theme";
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
      <Template columns={1} title={`${t("Inventory")} ${user?.name}`}>
        <Grid
          container
          direction="column"
          spacing={GRID_SPACING}
          className={"inventory"}
        >
          <Grid item>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              direction="row"
              className={"inventoryHeader"}
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
                  <Grid item>
                    <Typography color="textSecondary" variant="h6">
                      {">"}
                    </Typography>
                  </Grid>
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
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              direction="row"
              className={"inventoryFilters"}
              spacing={GRID_SPACING}
            >
              <Grid item>
                <FormControl variant="outlined" className={"from"}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Age
                  </InputLabel>
                  <Select
                    native
                    value={1}
                    onChange={() => console.log(4)}
                    inputProps={{
                      name: "age",
                      id: "filled-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Template>
    </>
  );
}
