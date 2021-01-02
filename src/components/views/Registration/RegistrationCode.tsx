import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useStore } from "effector-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { registrationCodeFx } from "stores/Game/Login/RegistrationModel";
import Template from "../Template/Template";

export const RegistrationCode = () => {
  const [state, setState] = useState<{ code: string }>({
    code: "",
  });
  const { t } = useTranslation();
  const pending = useStore(registrationCodeFx.pending);
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

          <Grid item>
            <Button
              size="small"
              onClick={() => registrationCodeFx({ code: state.code })}
              children={t("Register")}
              color="primary"
              variant="outlined"
              disabled={pending}
            />
          </Grid>
        </Grid>
      </Template>
    </>
  );
};
