import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ILoginForm } from "components/core/Registration/Login/Login";
import Template from "../../Template/Template";
import { loginFx } from "stores/Game/Login/LoginModel";
import { useStore } from "effector-react";
import CircularProgress from "@material-ui/core/CircularProgress";

export const LoginForm = () => {
  const [state, setState] = useState<ILoginForm>({
    email: "test2@yandex.ru",
    password: "111",
  });

  const { t } = useTranslation();
  const pending = useStore(loginFx.pending);

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
              <Typography variant="h6">{t("Autorization")}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {t("Autorization with you login and password from Monopoly")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={2}>
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
              <Button
                onClick={() => loginFx(state)}
                children={
                  pending ? <CircularProgress color="secondary" /> : t("Login")
                }
                color="primary"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <a href="/restore" style={{ marginLeft: "15px" }}>
                {t("Forgot password")}?
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <a href="/" className="button button-blueJeans button-maxwidth">
                {t("VK login")}
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="subtitle2">
                {t(
                  "If you enter the first time, the new Monopoly account will be create"
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {t("By fact of authorization you agree with")}{" "}
                <Link to="/pages/rules">{t("Site rules")}</Link>
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle2">
                {t("Register without VK")}{" "}
                <Link to="/registration">{t("here")}</Link>.
              </Typography>
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
