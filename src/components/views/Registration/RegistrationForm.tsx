import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Template from "../Template/Template";
import { LoginGate } from "stores/Game/Login/LoginModel";
import { error$ } from "stores/Game/Error/ErrorModel";
import { useGate, useStore } from "effector-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import {
  IRegistrationForm,
  registration$,
  registrationFx,
  registrationEvent,
  activateUser,
  resendRegistrationEmail,
  resendRegistrationEmailFx,
} from "stores/Game/Login/RegistrationModel";

const secondsToTime = (secs: number) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours < 10 ? "0" + hours : hours,
    m: minutes < 10 ? "0" + minutes : minutes,
    s: seconds < 10 ? "0" + seconds : seconds,
  };
  return obj;
};

export const RegistrationForm = () => {
  const [state, setState] = useState<IRegistrationForm>({
    email: "test@test.ru",
    password: "password",
    repeatPassword: "password",
    name: "testUser",
    registrationCode: "",
  });

  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const { t } = useTranslation();
  const pending = useStore(registrationFx.pending);
  const resendPending = useStore(resendRegistrationEmailFx.pending);
  const registration = useStore(registration$);
  const fail = useStore(error$);
  const remainTime = secondsToTime(seconds);
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
                onClick={() => registrationEvent(state)}
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

  const code = (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={3}
        direction="column"
      >
        <Grid item>
          <Typography variant="h6">
            {t("Registration code from the letter we sent on your email")}
          </Typography>
        </Grid>
        <Grid
          item
          style={{ height: "70px", width: "100%", textAlign: "center" }}
        >
          {pending || resendPending ? (
            <CircularProgress color="secondary" />
          ) : (
            fail && <Alert severity="error">{t(fail)}</Alert>
          )}
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label={t("Registration Code")}
            variant="outlined"
            placeholder=""
            onChange={(v: any) =>
              setState({ ...state, registrationCode: v.target.value })
            }
            value={state.registrationCode}
          />
        </Grid>
        <Grid item>
          {seconds > 0 ? (
            <Typography variant="body2">
              Отправить код повторно можно через {remainTime.m}:{remainTime.s}
            </Typography>
          ) : (
            <Typography
              style={{ cursor: "pointer", color: "#bb0000" }}
              variant="body2"
              onClick={() => {
                setSeconds(10);
                resendRegistrationEmail();
              }}
            >
              Отправить код повторно
            </Typography>
          )}
        </Grid>
        <Grid item>
          <Button
            size="small"
            onClick={() =>
              state.registrationCode &&
              activateUser({ registrationCode: state.registrationCode })
            }
            children={t("Ok")}
            color="primary"
            variant="outlined"
            disabled={pending || !state.registrationCode}
          />
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Template columns={1} title={"Registration"}>
        {registration ? code : comp}
      </Template>
    </>
  );
};
