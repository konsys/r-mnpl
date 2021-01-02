import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Template from "../Template/Template";
import {
  loginFail$,
  registrationFx,
  LoginGate,
  registration,
} from "stores/Game/Login/LoginModel";
import { useGate, useStore } from "effector-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

export const RegistrationForm = () => {
  const [state, setState] = useState<IRegistrationForm>({
    email: "test@test.ru",
    password: "password",
    repeatPassword: "password",
    name: "testUser",
  });

  const { t } = useTranslation();
  const pending = useStore(registrationFx.pending);
  const fail = useStore(loginFail$);

  useGate(LoginGate);

  const comp = (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={3}
        direction="column"
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6">{t("Registration")}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {t("Create your Monopoly account")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid
              item
              style={{ height: "70px", width: "100%", textAlign: "center" }}
            >
              {pending ? (
                <CircularProgress color="secondary" />
              ) : (
                fail && <Alert severity="error">{t(fail)}</Alert>
              )}
            </Grid>

            <Grid item>
              <TextField
                type="text"
                label={t("Name")}
                variant="outlined"
                placeholder=""
                onChange={(v: any) =>
                  setState({ ...state, name: v.target.value })
                }
                value={state.name}
              />
            </Grid>

            <Grid item>
              <TextField
                type="email"
                label={t("Email")}
                variant="outlined"
                placeholder=""
                onChange={(v: any) =>
                  setState({ ...state, email: v.target.value })
                }
                value={state.email}
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                label={t("Password")}
                variant="outlined"
                placeholder=""
                onChange={(v: any) =>
                  setState({ ...state, password: v.target.value })
                }
                value={state.password}
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                label={t("Repeat password")}
                variant="outlined"
                placeholder=""
                onChange={(v: any) =>
                  setState({ ...state, repeatPassword: v.target.value })
                }
                value={state.repeatPassword}
              />
            </Grid>

            <Grid item>
              <Button
                size="small"
                onClick={() => registration(state)}
                children={t("Register")}
                color="primary"
                variant="outlined"
                disabled={pending}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Template columns={1} title={"Login"}>
        {comp}
      </Template>
    </>
  );
};
