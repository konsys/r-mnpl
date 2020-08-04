import React, { useState } from "react";

import { ILoginForm } from "../../../core/Registration/Login/Login";
import Template from "../../Game/Template";

interface IProps {
  onSubmit: (data: ILoginForm) => any;
}

export const LoginForm = ({ onSubmit }: IProps) => {
  const [state, setState] = useState<ILoginForm>({
    email: "test2@yandex.ru",
    password: "111",
  });

  return (
    <>
      <Template>
        <div className="widther auth">
          <div className="block">
            <div className="auth-side">
              <div className="title title-3">Авторизация</div>
              <p>
                Авторизуйтесь при помощи логина и пароля от вашего аккаунта на
                Monopoly One.
              </p>
              <div className="form">
                <div className="form-row">
                  <label>Электронная почта</label>

                  <input
                    className="form-input"
                    type="email"
                    placeholder=""
                    value={state.email}
                    onChange={(v) =>
                      setState({ ...state, email: v.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <label>Пароль</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder=""
                    value={state.password}
                    onChange={(v) =>
                      setState({ ...state, password: v.target.value })
                    }
                  />
                </div>
                <button
                  className="button button-grass"
                  onClick={() => onSubmit(state)}
                >
                  Войти
                </button>
                <a href="/restore" style={{ marginLeft: "15px" }}>
                  Забыли пароль?
                </a>
              </div>
            </div>
            <div className="auth-separator"></div>
            <div className="auth-side">
              <div className="title title-3">&nbsp;</div>
              <p>Войдите через социальную сеть.</p>
              <p>
                Если вы входите через социальную сеть{" "}
                <strong>первый раз</strong>, вам будет создан{" "}
                <strong>новый аккаунт</strong>.
              </p>
              <div className="form">
                <a
                  href="/"
                  className="button button-blueJeans button-maxwidth"
                  id="auth_social_vk"
                  mnpl-newtab="false"
                >
                  Войти через ВКонтакте
                </a>
              </div>
              <p
                style={{
                  marginTop: "50px",
                  marginBottom: "0px",
                  opacity: "0.66",
                }}
              >
                Фактом авторизации или регистрации любым способом вы полностью
                соглашаетесь с<a href="/pages/rules">Правилами Сайта</a>.
              </p>
            </div>
          </div>
          <div className="auth-more">
            Зарегистрироваться без помощи социальной сети можно
            <a href="/reg">здесь</a>.
          </div>
        </div>
      </Template>
    </>
  );
};
