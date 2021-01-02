import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Template from "../Template/Template";

export const RegistrationCode = () => {
  const [state, setState] = useState<{ code: string }>({
    code: "",
  });
  const { t } = useTranslation();

  return (
    <>
      <Template columns={1} title={"Login"}>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={3}
          direction="column"
        >
          <Grid item>
            <Typography variant="h6">
              {t("Registration code from the letter")}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label={t("Registration Code")}
              variant="outlined"
              placeholder=""
              onChange={(v: any) => setState({ code: v.target.value })}
              value={state.code}
            />
          </Grid>
        </Grid>
      </Template>
    </>
  );
};
