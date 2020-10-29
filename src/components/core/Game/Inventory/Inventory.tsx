import "./inventory.scss";

import { Button, Grid, Select, TextField, Typography } from "@material-ui/core";
import { IField, InventoryType } from "types/types";
import {
  InventoryGate,
  inventory$,
} from "../../../../stores/Game/Inventory/InventoryModel";
import React, { useState } from "react";
import { useGate, useStore } from "effector-react";

import Alert from "@material-ui/lab/Alert";
import { GRID_SPACING } from "theme";
import InventoryItem from "./InventoryItem";
import { Link } from "react-router-dom";
import { Params } from "config/params";
import Template from "components/views/Template/Template";
import { createImgPath } from "utils/fields.utils";
import { useTranslation } from "react-i18next";
import { user$ } from "stores/Game/User/UserModel";

export default function Inventory() {
  const user = useStore(user$);
  useGate(InventoryGate, {
    userId: user && user.userId,
  });
  const { t } = useTranslation();
  const [stateInventory, setStateInventory] = useState<InventoryType | null>(
    null
  );
  const inventoryData = useStore(inventory$);

  return (
    <>
      <Template columns={1} title={`${t("Inventory")} ${user?.name || ""}`}>
        {!user ? (
          <Grid container justify="center" alignContent="stretch">
            <Alert severity="error">
              {t("Login to manage your inventory")}
            </Alert>
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            spacing={5}
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
                          {(user && user.name && user.name.toUpperCase()) || ""}
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
                      <Typography color="textSecondary">
                        {inventoryData?.inventoryQuantity}
                      </Typography>
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
                justify="flex-start"
                direction="row"
                className={"inventoryFilters"}
                spacing={GRID_SPACING}
              >
                <Grid item>
                  <TextField
                    style={{ minWidth: "330px" }}
                    variant="outlined"
                    label={t("Input words for items search")}
                  />
                </Grid>
                <Grid item>
                  <Select
                    variant="outlined"
                    native
                    value={stateInventory}
                    onChange={(e) => {
                      if (e.target.value) {
                        setStateInventory(e.target.value as InventoryType);
                        return;
                      }
                      setStateInventory(null);
                    }}
                  >
                    <option value={""}>{t("All items")}</option>
                    <option value={InventoryType.FIELDS}>{t("Fields")}</option>
                    <option value={InventoryType.CARDS}>{t("Cards")}</option>
                    <option value={InventoryType.CASES}>
                      {t("Cases and sets")}
                    </option>
                    <option value={InventoryType.DICES}>
                      {t("Dices and generators")}
                    </option>
                    <option value={InventoryType.BADGES}>{t("Badges")}</option>
                    <option value={InventoryType.STICKERS}>
                      {t("Stickers")}
                    </option>
                    <option value={InventoryType.OTHERS}>{t("Others")}</option>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className="inventoryItems">
                <Grid item>
                  {inventoryData &&
                    inventoryData.fields.map((v: IField) => (
                      <InventoryItem
                        key={v.fieldId}
                        img={v.imgSrc ? createImgPath(v.imgSrc) : ""}
                        name={v.name}
                        level={v.level}
                      />
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Template>
      ))
    </>
  );
}
