import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ILoginForm } from "components/core/Login/Login";
import Template from "../Template/Template";
import { loginFx, login, LoginGate } from "stores/Game/Login/LoginModel";
import { useGate, useStore } from "effector-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import queryString from "query-string";

export const LoginForm = () => {
  const [state, setState] = useState<ILoginForm>({
    email: "test@test.ru",
    password: "password",
  });

  const { t } = useTranslation();
  const pending = useStore(loginFx.pending);

  const queryObj = queryString.parse(window.location.search);
  const code = queryObj.code ? queryObj.code.toString() : "";

  useGate(LoginGate, { code });

  const handleRedirect = () => {
    const params = {
      redirect_uri: "http://127.0.0.1:3000/login",
      client_id: 7731384,
      scope: "email",
      display: "popup",
      v: 5.126,
      revoke: 1,
    };
    const stringified = queryString.stringify(params);
    window.location.href = `https://oauth.vk.com/authorize?${stringified}`;
  };

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
            {pending && (
              <Grid
                item
                style={{ height: "70px", width: "100%", textAlign: "center" }}
              >
                <CircularProgress color="secondary" />
              </Grid>
            )}
            <Grid item>
              <Button
                size="small"
                onClick={() => login(state)}
                children={t("Login")}
                color="primary"
                variant="outlined"
                disabled={pending}
              />
            </Grid>

            <Grid item>
              <Link to="/restore" style={{ marginLeft: "15px" }}>
                {t("Forgot password")}?
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <button onClick={handleRedirect}>{t("VK login")}</button>
              {/* <a
                target="_blank"
                href="https://oauth.vk.com/authorize?client_id=7731384&redirect_uri=localhost:3000&display=popup"
                className="button button-blueJeans button-maxwidth"
              >
                {t("VK login")}
              </a> */}
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
