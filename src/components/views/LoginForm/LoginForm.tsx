import React, { useState } from "react";

interface IProps {
  onSubmit: (data: ILoginForm) => any;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = ({ onSubmit }: IProps) => {
  const [state, setState] = useState<ILoginForm>({ email: "", password: "" });

  return (
    <>
      <div className="block header" style={{ top: "0px" }}>
        <div className="widther">
          <a href="/" className="header-logo">
            <svg
              height="30"
              viewBox="0 0 500 500"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M111.02 54.95c4.73-13.92 9.11-27.95 14.08-41.78 3.08 1.26 3.81 4.76 5.31 7.4 38.74 77.58 77.54 155.14 116.27 232.73.86 1.78 2.05 3.36 3.32 4.87 2.01-2.22 3.41-4.88 4.68-7.57 37.95-76 75.92-151.99 113.91-227.98 1.71-3.22 2.92-6.79 5.43-9.51 1.39 1.11 1.97 2.82 2.53 4.44 34.23 103.05 68.61 206.05 102.93 309.07 5.05 16.14 10.48 32.16 15.84 48.2 1.01 2.98 2.25 5.88 3.52 8.75-19.49 9.8-38.37 20.78-56.62 32.72-15.73 10.23-30.62 21.73-44.4 34.46-1.24-1.39-2.24-2.98-2.56-4.83-11.77-46.96-23.67-93.89-35.48-140.85-2.07-7.48-3.4-15.19-6.05-22.5-1.04.95-2.09 1.93-2.7 3.23-31.46 62.95-62.9 125.93-94.38 188.88-1.91 3.59-3.35 7.48-5.76 10.78-2.15.77-2.79-1.58-3.66-2.99-31.75-63.53-63.47-127.07-95.23-190.6-1.57-3.01-2.78-6.27-4.94-8.93-1.64.51-1.77 2.38-2.24 3.76-12.92 51.67-26.07 103.28-39 154.95-.85 3.15-1.23 6.67-3.63 9.12-25.28-23.66-54.86-42.1-85-58.87-5.29-3.06-11.04-5.28-16.1-8.74 8.9-25.05 16.84-50.44 25.44-75.61 7.67-20.98 14.28-42.32 21.49-63.46 21-63.05 42.05-126.08 63-189.14z"></path>
            </svg>
            <div>Monopoly One</div>
          </a>
          <div className="header-findgame">
            <a href="/games" className="button button-grass button-free">
              Поиск игр
            </a>
          </div>
          <div className="header-menu">
            <a href="/m1tv" className="header-menu-one">
              M1TV <span className="badge _streams">3</span>
            </a>
            <a href="/friends" className="header-menu-one">
              Друзья
            </a>
            <a href="/inventory" className="header-menu-one">
              Инвентарь
            </a>
            <a href="/market" className="header-menu-one">
              Маркет
            </a>
          </div>
          <div className="header-right">
            <div className="header-right-one _search"></div>
            <div className="header-right-one _im"></div>
          </div>
          <div className="HeaderUser">
            <div className="HeaderUser-menu">
              <a href="/profile/429935" className="HeaderUser-menu-user">
                <div className="HeaderUser-menu-user-info">
                  <div className="HeaderUser-menu-user-info-nick">
                    Константин
                  </div>
                  <div className="HeaderUser-menu-user-info-balance">0 р.</div>
                </div>
              </a>
              <div className="HeaderUser-menu-separator"></div>
              <a href="/trades" className="HeaderUser-menu-one">
                Обмены
              </a>
              <a href="/wallet" className="HeaderUser-menu-one">
                Кошелёк
              </a>
              <a href="/settings" className="HeaderUser-menu-one">
                Настройки
              </a>
              <div className="HeaderUser-menu-separator"></div>
              <div className="HeaderUser-menu-one">Выйти</div>
            </div>
            <div
              className="HeaderUser-avatar"
              style={{
                backgroundImage: `url('https://d1.dogecdn.wtf/730835360107724820/XkwxZrGMKv96.jpg')`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="nc">
        <div></div>
      </div>
      <div
        className="IM"
        style={{ top: "0px", paddingTop: "0px", display: "none" }}
      >
        <div className="IM-body">
          <div className="IM-body-side">
            <div className="IM-body-side-header">
              <div className="_title">Сообщения</div>
            </div>
            <div className="IMPlaceholder">
              <div className="IMPlaceholder-icon _state_0"></div>
              <div className="IMPlaceholder-text">У вас пока нет диалогов.</div>
            </div>
          </div>
          <div className="IM-body-main">
            <div className="IMPlaceholder">
              <div className="IMPlaceholder-icon _state_1"></div>
              <div className="IMPlaceholder-text">
                Выберите диалог из списка слева.
              </div>
            </div>
          </div>
          <div className="IM-body-close"></div>
        </div>
      </div>
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
              Если вы входите через социальную сеть <strong>первый раз</strong>,
              вам будет создан <strong>новый аккаунт</strong>.
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
      <div className="footer">
        <div className="widther grid grid-of-4">
          <div className="grid-4 footer-left">
            <a href="/">
              <div className="footer-left-logo"></div>
            </a>
            <div className="paragraph">Монополия — бесплатная онлайн-игра.</div>
            <div className="paragraph">
              Все бренды и торговые марки на этой странице принадлежат
              правообладателям и размещены на правах рекламы.
            </div>
          </div>
          <div className="grid-2">
            <div className="title title-4">Материалы</div>
            <div className="paragraph">
              <a href="/pages/rules">Правила Сайта</a>
            </div>
            <div className="paragraph">
              <a href="/pages/how-to-play">Как тут играть</a>
            </div>
            <div className="paragraph">
              <a href="/pages/guidelines">О нарушениях</a>
            </div>
            <div className="paragraph">
              <a href="/pages/inventory">Об инвентаре</a>
            </div>
            <div className="paragraph">
              <a href="/pages/ranks">Звания</a>
            </div>
          </div>
          <div className="grid-2">
            <div className="title title-4">&nbsp;</div>
            <div className="paragraph">
              <a href="/m1api.pdf" target="_blank">
                Документация API
              </a>
            </div>
            <div className="paragraph">
              <a href="/health">Статус Сайта</a>
            </div>
          </div>
          <div className="grid-4">
            <div className="title title-4">Соцсети</div>
            <div className="paragraph footer-icons">
              <a href="https://vk.com/monopolyone">
                <img
                  alt=""
                  className="footer-icons-one"
                  src="//cdn2.kirick.me/libs/monopoly/social/vk.svg"
                />
              </a>
              <a
                href="/away/aHR0cHM6Ly9tMS5nZy9kaXNjb3Jk"
                target="_blank"
                rel="noopener"
              >
                <img
                  alt=""
                  className="footer-icons-one"
                  src="//cdn2.kirick.me/libs/monopoly/social/discord.svg"
                />
              </a>
            </div>
            <div className="paragraph">
              Подписывайтесь на Монополию в соцсетях, чтобы быть в курсе
              обновлений игры.
            </div>
          </div>
        </div>
      </div>
      <div className="counters"></div>
      <div className="designDialog" style={{ display: "none" }}></div>
    </>
  );
};
