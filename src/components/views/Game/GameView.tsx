import React from "react";
import Template from "../Template/Template";

export const GameView = () => {
  return (
    <Template>
      <div className="widther container">
        <div className="col-4">
          <div className="VueGamesTopweek block">
            <div className="title title-4">
              Топ недели <a href="/top-week">подробнее</a>
            </div>
            <div className="VueGamesTopweek-data">
              <div className="emptylistmessage">
                Вы не входите в топ игроков недели — сначала выиграйте матч на
                четыре или пять игроков.
              </div>
            </div>
          </div>

          <div id="ph-stream" v-cloak />
          <div className="VueGamesFriends block block-notrimcontent">
            <div className="title title-4">Друзья онлайн</div>
            <div className="emptylistmessage" style={{ margin: 20 }}>
              Нет друзей онлайн.
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="block games-market">
            <div className="games-market-list">
              <div
                className="games-market-list-one"
                style={{
                  backgroundImage:
                    "linear-gradient(134deg, rgb(0, 168, 197), rgb(255, 255, 126) 120%)",
                }}
              >
                <div className="_container">
                  <div className="games-market-list-one-text">
                    <div className="games-market-list-one-text-title">
                      Эпическая коробка подарков
                    </div>
                    <div className="games-market-list-one-text-text">
                      <div>
                        Открыв её, вы подарите десяти случайным игрокам из
                        общего чата сувенирные карточки со ссылкой на ваш
                        профиль.
                      </div>
                    </div>
                  </div>
                  <div className="games-market-list-one-more">
                    <div className="games-market-list-one-more-image">
                      <img src="//m1.dogecdn.wtf/things/gift-big.svg" />
                    </div>
                    <div className="games-market-list-one-more-button">
                      <button style={{ color: "#80d4a2" }}>
                        Купить за 299 р.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="games-market-list-one"
                style={{
                  backgroundImage:
                    "linear-gradient(134deg, rgb(0, 168, 197), rgb(255, 255, 126) 120%)",
                }}
              >
                <div className="_container">
                  <div className="games-market-list-one-text">
                    <div className="games-market-list-one-text-title">
                      Скромная коробка подарков
                    </div>
                    <div className="games-market-list-one-text-text">
                      <div>
                        Открыв её, вы подарите трём случайным игрокам из общего
                        чата сувенирные карточки со ссылкой на ваш профиль.
                      </div>
                    </div>
                  </div>
                  <div className="games-market-list-one-more">
                    <div className="games-market-list-one-more-image">
                      <img src="//m1.dogecdn.wtf/things/gift-small.svg" />
                    </div>
                    <div className="games-market-list-one-more-button">
                      <button style={{ color: "#80d4a2" }}>
                        Купить за 99 р.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="games-market-list-one"
                style={{
                  backgroundImage:
                    "linear-gradient(126deg, rgb(234, 134, 128) 21.85%, rgb(150, 149, 236))",
                }}
              >
                <div className="_container">
                  <div className="games-market-list-one-text">
                    <div className="games-market-list-one-text-title">
                      VIP пропуск
                    </div>
                    <div className="games-market-list-one-text-text">
                      <div>
                        С VIP статусом можно создавать приватные комнаты, играть
                        в разных режимах и брать кредит во время игры.
                      </div>
                      <div>
                        <a href="/pages/vip">Подробнее о VIP статусе</a>
                      </div>
                    </div>
                  </div>
                  <div className="games-market-list-one-more">
                    <div className="games-market-list-one-more-image">
                      <img src="//m1.dogecdn.wtf/things/pass-vip-month.png" />
                    </div>
                    <div className="games-market-list-one-more-button">
                      <button style={{ color: "#904e95" }}>от 24 р.</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="games-market-list-one _horizontal"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200))",
                }}
              >
                <div className="_container">
                  <div className="games-market-list-one-text">
                    <div className="games-market-list-one-text-title">
                      Связка ключей
                    </div>
                    <div className="games-market-list-one-text-text">
                      <div>
                        Покупайте сразу 10, 25 или 50 ключей со скидкой! Связкой
                        ключей можно открыть любой кейс или коробочку с
                        кубиками.
                      </div>
                    </div>
                  </div>
                  <div className="games-market-list-one-more">
                    <div className="games-market-list-one-more-image">
                      <img src="//m1.dogecdn.wtf/keys/chain.png" />
                    </div>
                    <div className="games-market-list-one-more-button">
                      <button style={{ color: "#4bc0c8" }}>от 299 р.</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="games-market-arrow _left" />
            <div className="games-market-arrow _right" />
            <div className="games-market-dots">
              <div className="_selected" />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="Gchat block block-notrimcontent">
            <div className="Gchat-title title title-3">
              Чат{" "}
              <span className="_online">
                <span>2779</span> сейчас онлайн
              </span>
              <div className="Gchat-title-menu">
                <div className="dropdown">
                  <div className="dropdown-list">
                    <div className="dropdown-list-one _static">
                      <div className="form2-row">
                        <div className="form2-checkbox">
                          <input
                            type="checkbox"
                            id="gchat-opts-bots"
                            className="switcher"
                            design-for="DesIDa0f8301b1429000"
                          />
                          <div
                            className="switcher"
                            design-for="DesIDa0f8301b1429000"
                          />{" "}
                          <label htmlFor="gchat-opts-bots">
                            Показывать сообщения ботов
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-list-one _static">
                      <div className="form2-row">
                        <div className="form2-checkbox">
                          <input
                            type="checkbox"
                            id="gchat-opts-size"
                            className="switcher"
                            design-for="DesIDa0f8301b1829000"
                          />
                          <div
                            className="switcher"
                            design-for="DesIDa0f8301b1829000"
                          />{" "}
                          <label htmlFor="gchat-opts-size">
                            Увеличенный чат
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="paragraph Gchat-history">
              <div className="GchatHistory">
                <div data-userid={1853171} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:28 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/lapochka_limonya">
                        <span className="_nick">Лимон Авантюрист</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={154643} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:28 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/neneoneee">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">LERА RECZI</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eBottle.svg"
                          alt="Bottle"
                          kd-tooltip="Bottle"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <a
                          href="/profile/1792057"
                          className="SmartReplacer-mention"
                        >
                          -Sirin-
                        </a>
                        <span>, N </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eBottle.svg"
                          alt="Bottle"
                          kd-tooltip="Bottle"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> ichosi</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951385} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:29 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1951385">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Алексей</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>...</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1126798} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:29 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1126798">
                        <span className="_nick">gameMMA</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGift.svg"
                          alt="Gift"
                          kd-tooltip="Gift"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1838927} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:29 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/stonkman">
                        <span className="_nick">stonkman</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Куплю ваш набор за 3 голубые</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1838927} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:30 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/stonkman">
                        <span className="_nick">stonkman</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>хотя нет</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:31 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/nvm_nvm"
                          className="SmartReplacer-mention"
                        >
                          n v m
                        </a>
                        <span>, </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGun.svg"
                          alt="Gun"
                          kd-tooltip="Gun"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={404328} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:31 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/deadrxse">
                        <span className="_nick">керил</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a href="https://www.twitch.tv/de4drxse">
                          https://www.twitch.tv/de4drxse
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125460} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:31 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125460">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Sacha Baron Cohen</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Сыграю на ютуб</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1870363} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:31 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1870363">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Пистолетка</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Перетас</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={5939} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:33 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <div className="_moderator" />
                      <a href="/profile/ventura">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ace Ventura</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>КУПЛЮ твои ВЕЩИ за реал </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eMoney.svg"
                          alt="Money"
                          kd-tooltip="Money"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> Дорого, быстро, надежно </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span>
                          {" "}
                          Фиолки / Красные / Золото / Связочки / Випки{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span>
                          {" "}
                          Оплата на карту / киви / яндекс / вк пэй и т.п.{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePeppa.svg"
                          alt="Peppa"
                          kd-tooltip="Peppa"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> Пиши в ВК </span>

                        <a href="https://vk.com/venturaok">
                          https://vk.com/venturaok
                        </a>

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951367} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:33 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951367">
                        <span className="_nick">zLE/rilo</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eClap.svg"
                          alt="Clap"
                          kd-tooltip="Clap"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951367} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:33 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951367">
                        <span className="_nick">zLE/rilo</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eMid.png"
                          alt="Mid"
                          kd-tooltip="Mid"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:34 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>
                          , сегодня мы будем ещё раз плакать от открытых кейсов
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:35 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/this_is_dima"
                          className="SmartReplacer-mention"
                        >
                          Итальянец из Спарты
                        </a>
                        <span>, а ну-ка кыш!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951401} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:35 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951401">
                        <span className="_nick">Вячеслав</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>.!.</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1884933} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:35 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip _invert">
                      <a href="/profile/1884933">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">пёся</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _drop">
                      открывает{" "}
                      <a
                        href="/market/thing/566"
                        className
                        style={{ color: "rgb(79, 193, 233)" }}
                      >
                        Зимний кейс{" "}
                      </a>{" "}
                      и получает{" "}
                      <a
                        href="/market/thing/562"
                        className
                        style={{ color: "rgb(75, 137, 220)" }}
                      >
                        ★&nbsp;Apotekarnes
                      </a>
                    </span>
                  </span>
                </div>
                <div data-userid={284587} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:36 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/prorok">
                        <span className="_nick">Proro4ek</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Ребятки. У кого есть не нужны кейсы, готов забрать или
                          обменять на что-то из моего инвенторя!!
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125460} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:36 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125460">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Sacha Baron Cohen</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>сыграю на фиолку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={504189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:36 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/504189">
                        <span className="_nick">Владимир</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/ePeppa.svg"
                          alt="Peppa"
                          kd-tooltip="Peppa"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1940444} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:36 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _invert">
                      <a href="/profile/1940444">
                        <span className="_nick">Borya228</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _drop">
                      открывает{" "}
                      <a
                        href="/market/thing/344"
                        className
                        style={{ color: "rgb(79, 193, 233)" }}
                      >
                        Набор Tre
                      </a>{" "}
                      и получает{" "}
                      <a
                        href="/market/thing/173"
                        className
                        style={{ color: "rgb(218, 69, 83)" }}
                      >
                        Fendi
                      </a>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:36 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>, я никого не кидала!!!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1495454} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:37 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1495454">
                        <span className="_nick">Анжелика</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>предлагайте обмены</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={894162} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:37 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/894162">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ковальски</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>new balance обмен</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:37 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ничо ты не видел! </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eGun.svg"
                          alt="Gun"
                          kd-tooltip="Gun"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>,</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={154643} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:37 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/neneoneee">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">LERА RECZI</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:37 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>, не вздумай!!!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1010582} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/asero4ka">
                        <span className="_nick">Анита</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>перетас +2</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1358904} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nester">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Nester</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>, ага)</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1258716} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1258716">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Даниил</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>+2 перетас</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/neneoneee"
                          className="SmartReplacer-mention"
                        >
                          LERА RECZI
                        </a>
                        <span>, я кидала тебя на ранг?????</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1787515} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1787515">
                        <span className="_nick">Misha</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Трейдану коробки с кубиками</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={154643} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/neneoneee">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">LERА RECZI</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/nvm_nvm"
                          className="SmartReplacer-mention"
                        >
                          n v m
                        </a>
                        <span>
                          , нет вроде,меня сегодня наоборот повышали только{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>, чушь какая!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/neneoneee"
                          className="SmartReplacer-mention"
                        >
                          LERА RECZI
                        </a>
                        <span>, воот, а чего этот жук врёт тогда??</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>я объевся </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:38 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/nvm_nvm"
                          className="SmartReplacer-mention"
                        >
                          n v m
                        </a>
                        <span>, ясно,на ранг кидаешь </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>а теперь можно пойти и покурить</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125460} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125460">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Sacha Baron Cohen</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Сыграю на фиолку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>
                          , чушь!! Настя меня выебала в доль и поперёк
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={404328} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/deadrxse">
                        <span className="_nick">керил</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a href="https://clips.twitch.tv/PreciousEncouragingButterPeoplesChamp">
                          https://clips.twitch.tv/PreciousEncourag...
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ну пезда</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={884047} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/884047">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">ღ๏l๏l๏รђкคღ</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Епрст</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={404328} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/deadrxse">
                        <span className="_nick">керил</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a href="https://www.twitch.tv/de4drxse">
                          https://www.twitch.tv/de4drxse
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125460} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125460">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Sacha Baron Cohen</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Чат наводнен какими-то великовозрастными детьми я
                          смотрю)
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/deadrxse"
                          className="SmartReplacer-mention"
                        >
                          керил
                        </a>
                        <span>, не спамь!!!!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={884047} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:39 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/884047">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">ღ๏l๏l๏รђкคღ</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Сколько Лер то </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePanda.svg"
                          alt="Panda"
                          kd-tooltip="Panda"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/nvm_nvm"
                          className="SmartReplacer-mention"
                        >
                          n v m
                        </a>
                        <span>, не ори</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/this_is_dima"
                          className="SmartReplacer-mention"
                        >
                          Итальянец из Спарты
                        </a>
                        <span>, кыш!!!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>пошипи </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1679294} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/ayfniy">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">ᴀʏꜰɴɪʏ</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Злой договорились ?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1657630} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _invert">
                      <a href="/profile/1657630">
                        <span className="_nick">VladBarateon</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _drop">
                      открывает{" "}
                      <a
                        href="/market/thing/566"
                        className
                        style={{ color: "rgb(79, 193, 233)" }}
                      >
                        Зимний кейс{" "}
                      </a>{" "}
                      и получает{" "}
                      <a
                        href="/market/thing/558"
                        className
                        style={{ color: "rgb(218, 69, 83)" }}
                      >
                        Nintendo
                      </a>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ну да ну да</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951412} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951412">
                        <span className="_nick">Степан</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>123</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:40 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/starkov"
                          className="SmartReplacer-mention"
                        >
                          Лешка
                        </a>
                        <span>, НЕ ВЗДУМАЙ!!!!!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949566} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1949566">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Эдик</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>челы подарите кубике пж а я вам минет</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ну да ну да</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>все красные</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>а мне ничего</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1848159} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1848159">
                        <span className="_nick">Костя</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1657630"
                          className="SmartReplacer-mention"
                        >
                          VladBarateon
                        </a>
                        <span>, нужен еще один зимний кейс?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={838750} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nvm_nvm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">n v m</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          вы тут ещё титры выбейте, тут и Ева к нам
                          присоединиться
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1939033"
                          className="SmartReplacer-mention"
                        >
                          PurpleL
                        </a>
                        <span>
                          , минус 10 ключей одни синие ,не один ты такой
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:41 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/nvm_nvm"
                          className="SmartReplacer-mention"
                        >
                          n v m
                        </a>
                        <span>, кыш змея </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:42 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/this_is_dima"
                          className="SmartReplacer-mention"
                        >
                          Итальянец из Спарты
                        </a>
                        <span>, в какой момент в Спарту переехал?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:42 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/iron15"
                          className="SmartReplacer-mention"
                        >
                          Freddy ™
                        </a>
                        <span>
                          , я так понял, это не мне, а Лешке, но если надо, могу
                          обменить зимний кейс на 1 синьку, желательно
                          содержимое кейса
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:42 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1314906"
                          className="SmartReplacer-mention"
                        >
                          Спартанец Мурки
                        </a>
                        <span>, жизнь такая</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Найди мне села</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Заберите насмешку ,по братски</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/this_is_dima"
                          className="SmartReplacer-mention"
                        >
                          Итальянец из Спарты
                        </a>
                        <span>, Рад видить в моих рядах))</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1314906"
                          className="SmartReplacer-mention"
                        >
                          Спартанец Мурки
                        </a>
                        <span>, я элитный</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>спартанец</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1343537} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1343537">
                        <span className="_nick">2n╪n2</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>обменяю гучи на что-то интересное</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1926254} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/raech1">
                        <span className="_nick">Raech</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1343537} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1343537">
                        <span className="_nick">2n╪n2</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:43 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1920256} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/zolotoyonelove">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">ZOLOTOYONE</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Спартак чемпион!!!1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1926254} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/raech1">
                        <span className="_nick">Raech</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>я из дивизиона 300 спартанцев</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1358904} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nester">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Nester</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Так я главный </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1343537} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1343537">
                        <span className="_nick">2n╪n2</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125460} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125460">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Sacha Baron Cohen</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Абсолют кринж</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1314906"
                          className="SmartReplacer-mention"
                        >
                          Спартанец Мурки
                        </a>
                        <span>, ты 301</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951403} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:44 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951403">
                        <span className="_nick">Кирилл</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eMid.png"
                          alt="Mid"
                          kd-tooltip="Mid"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1848159} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1848159">
                        <span className="_nick">Костя</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1926254} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/raech1">
                        <span className="_nick">Raech</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949665} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1949665">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Иосиф</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Я люблю Муром!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>я тоже</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>щас бы собрать легион </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1730123} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:45 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1730123">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Снюсова</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Приветики:*</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:46 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/this_is_dima"
                          className="SmartReplacer-mention"
                        >
                          Итальянец из Спарты
                        </a>
                        <span>, агаааа.... и на Персов</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:46 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1208758} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:46 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1208758">
                        <span className="_nick">KingUebok</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>gfsdgsdgf</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:46 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          кто сделает себе приписку из спарты получил голубую{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1540659} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1540659">
                        <span className="_nick">Нихат</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Ky</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1605744} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip _invert">
                      <a href="/profile/1605744">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Елена</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _drop">
                      открывает{" "}
                      <a
                        href="/market/thing/566"
                        className
                        style={{ color: "rgb(79, 193, 233)" }}
                      >
                        Зимний кейс{" "}
                      </a>{" "}
                      и получает{" "}
                      <a
                        href="/market/thing/476"
                        className
                        style={{ color: "rgb(218, 69, 83)" }}
                      >
                        Насмешка «Money»
                      </a>
                    </span>
                  </span>
                </div>
                <div data-userid={1314906} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1314906">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Спартанец Мурки</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Ток в чат пусть отпишут</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={154643} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/neneoneee">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">LERА RECZI</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1605744"
                          className="SmartReplacer-mention"
                        >
                          Елена
                        </a>
                        <span>, </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Да ебать 😂</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1325895} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/evaeva">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ева</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1605744"
                          className="SmartReplacer-mention"
                        >
                          Елена
                        </a>
                        <span>, </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eMoney.svg"
                          alt="Money"
                          kd-tooltip="Money"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Что за день сегодня ?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1947805} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:47 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1947805">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Данил</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:48 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1605744"
                          className="SmartReplacer-mention"
                        >
                          Елена
                        </a>
                        <span>
                          , нужен зимний кейс? обменяю на 1 синьку, желательно
                          содержимое кейса
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={154643} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:48 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/neneoneee">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">LERА RECZI</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>куплю связку </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951428} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:48 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951428">
                        <span className="_nick">nagibator_erki34</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>привит я глобал</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1325895} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:48 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/evaeva">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ева</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1939033"
                          className="SmartReplacer-mention"
                        >
                          PurpleL
                        </a>
                        <span>, вот это великий трейд конечно!</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:48 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/evaeva"
                          className="SmartReplacer-mention"
                        >
                          Ева
                        </a>
                        <span>
                          , ну а что, выбъет еще одну насмешку за пару к рублей
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1568831} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:49 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1568831">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">jerkmastZOREDD</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>че кто поменяет почку на эйчем дем</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1286938} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:49 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1286938">
                        <span className="_nick">Нюша</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Кто на синьку?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:49 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Продам насмешку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1730123} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:49 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1730123">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Снюсова</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Поменяю сиську за синьку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1325895} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:50 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/evaeva">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ева</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1939033"
                          className="SmartReplacer-mention"
                        >
                          PurpleL
                        </a>
                        <span>, сам в это веришь? </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHehe.svg"
                          alt="Hehe"
                          kd-tooltip="Hehe"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939068} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:50 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939068">
                        <span className="_nick">Серый</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>го</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:50 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1730123"
                          className="SmartReplacer-mention"
                        >
                          Снюсова
                        </a>
                        <span>, кидай </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1600478} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:50 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1600478">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Назар</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1941511} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:50 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1941511">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">denisen1337</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>send nudes</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1600478} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:51 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1600478">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Назар</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          всем првиет я ютюбер снимаю видео кто хочет со мной
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1358904} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:51 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/nester">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Nester</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Ну да ну да, переходишь к человеку который открыл
                          кейс, а у него даже ключей нет)
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:51 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/evaeva"
                          className="SmartReplacer-mention"
                        >
                          Ева
                        </a>
                        <span>
                          , та я еще новичок и не очень разбираюсь в том,
                          насколько может везти с открытием кейсов, просто
                          случайно увидел как она достала насмешку за 4950 р
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949510} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:51 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1949510">
                        <span className="_nick">Dontel</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Дайте ключик</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:52 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          просто в кейсах не так много шмоток, что бы шанс был
                          уж слишком маленьким
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1677239} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:52 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1677239">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Johan Lvovich</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Куплю ред бул за 350</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1432448} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:52 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1432448">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Синебот</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1939033"
                          className="SmartReplacer-mention"
                        >
                          PurpleL
                        </a>
                        <span>, Там разные %</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1838417} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:52 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1838417">
                        <span className="_nick">Женя</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Обменяю тёмны кейс на синьку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949510} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:53 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1949510">
                        <span className="_nick">Dontel</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>А как тут меняться?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:53 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1432448"
                          className="SmartReplacer-mention"
                        >
                          Синебот
                        </a>
                        <span>
                          , я это понимаю, но здесь вроде нету кейсов на
                          подобии: в кейсе 3 шмотки, все крутые, кейс стоит
                          много, что не выпадет, будет круто
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={404328} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:55 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/deadrxse">
                        <span className="_nick">керил</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a href="https://www.twitch.tv/de4drxse">
                          https://www.twitch.tv/de4drxse
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={796267} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:55 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/polyaa">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Polina</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Продаю Красные и Фиолетовые карты / Связки ключей /
                          Кубы / Значки / Насмешки{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eMoney.svg"
                          alt="Money"
                          kd-tooltip="Money"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span>
                          {" "}
                          Удобный каталог / отзывы от покупателей / низкие и
                          выгодные цены{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eMLG.svg"
                          alt="MLG"
                          kd-tooltip="MLG"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <a href="https://vk.com/polinasshop">
                          https://vk.com/polinasshop
                        </a>

                        <span> Поспеши </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1838417} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:56 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1838417">
                        <span className="_nick">Женя</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Абменяю кейсы</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={284587} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:56 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/prorok">
                        <span className="_nick">Proro4ek</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Ребятки. У кого есть не нужны кейсы, готов забрать или
                          обменять на что-то из моего инвентаря!!
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1939033} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:57 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1939033">
                        <span className="_nick">PurpleL</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/prorok"
                          className="SmartReplacer-mention"
                        >
                          Proro4ek
                        </a>
                        <span>, давай в лс</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951451} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:58 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951451">
                        <span className="_nick">Александр</span>
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1756777} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:59 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1756777">
                        <span className="_nick">bakalox</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Савелька</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1800253} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:59 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/iron15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Freddy ™</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Насмешку на связки ключей го?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1950545} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">13:59 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1950545">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Brodyaga_Gordey</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Всем ку</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1880071} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/experiment">
                        <span className="_nick">Эксперимент</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Расскажу за фиолку, как прокачал звание не нарушая
                          правил, без випа и карточек за минимальное количество
                          побед, а так же о способах применения данной тактики в
                          играх!{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={5939} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <div className="_moderator" />
                      <a href="/profile/ventura">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Ace Ventura</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Випки / Карты / Значки / Насмешки / Генераторы чисел
                          на любой вкус{" "}
                        </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> Покупай вещи с выгодой до 50% </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/ePeppa.svg"
                          alt="Peppa"
                          kd-tooltip="Peppa"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> Более 100 лотов в удобном каталоге </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eMLG.svg"
                          alt="MLG"
                          kd-tooltip="MLG"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> Просто выбрать, просто оплатить! </span>

                        <a href="https://vk.com/venturasshop">
                          https://vk.com/venturasshop
                        </a>

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eVenturaOk.png"
                          alt="VenturaOk"
                          kd-tooltip="VenturaOk"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1581380} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1581380">
                        <span className="_nick">Юрий</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eGun.svg"
                          alt="Gun"
                          kd-tooltip="Gun"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eNichosi.svg"
                          alt="Nichosi"
                          kd-tooltip="Nichosi"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1945379} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1945379">
                        <span className="_nick">Евгений Басота</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>привет</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1911245} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1911245">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Samurai.</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>One Plus на маркете 29р берите</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951456} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:00 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951456">
                        <span className="_nick">Иван</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Лох никита</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1581380} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:01 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1581380">
                        <span className="_nick">Юрий</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eHeart.svg"
                          alt="Heart"
                          kd-tooltip="Heart"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951453} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:01 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951453">
                        <span className="_nick">Gerroch</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ghbdtn</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1347347} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:01 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/awesomo">
                        <span className="_nick">Ш.И.К.А.Р.Н.О. 4000</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Магазин ключей и кейсов </span>

                        <a href="https://vk.cc/awAL3x">https://vk.cc/awAL3x</a>

                        <span>
                          {" "}
                          Затаривайся. Но не забывай, тебе тут не рады.
                          Очередной недовольный клиент{" "}
                        </span>

                        <a href="https://prntscr.com/tem9tm">
                          https://prntscr.com/tem9tm
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1927965} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:01 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1927965">
                        <span className="_nick">Иван</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Ахаххахаа</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1581380} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:01 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1581380">
                        <span className="_nick">Юрий</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eGun.svg"
                          alt="Gun"
                          kd-tooltip="Gun"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eCatCry.svg"
                          alt="CatCry"
                          kd-tooltip="CatCry"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1581380} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1581380">
                        <span className="_nick">Юрий</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eGun.svg"
                          alt="Gun"
                          kd-tooltip="Gun"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eCatCry.svg"
                          alt="CatCry"
                          kd-tooltip="CatCry"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1927965} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1927965">
                        <span className="_nick">Иван</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={284587} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/prorok">
                        <span className="_nick">Proro4ek</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Ребятки. У кого есть не нужны кейсы, готов забрать или
                          обменять на что-то из моего инвентаря!!
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1911245} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1911245">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Samurai.</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>One Plus на маркете 29р берите</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1911245} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1911245">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Samurai.</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>25*</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={798336} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/798336">
                        <span className="_nick">Макс</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eRip.svg"
                          alt="Rip"
                          kd-tooltip="Rip"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eRip.svg"
                          alt="Rip"
                          kd-tooltip="Rip"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eRip.svg"
                          alt="Rip"
                          kd-tooltip="Rip"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />

                        <span> </span>

                        <img
                          src="//m1.dogecdn.wtf/chat/eRip.svg"
                          alt="Rip"
                          kd-tooltip="Rip"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={169606} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/169606">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">pochli</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/awesomo"
                          className="SmartReplacer-mention"
                        >
                          Ш.И.К.А.Р.Н.О. 4000
                        </a>
                        <span>, jujym</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={169606} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:02 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/169606">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">pochli</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>огонь</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1885949} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:03 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1885949">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Диана</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>В перетасовку ребят кто пойдёт? Нужно +2</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1848683} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/s.nstrv">
                        <span className="_nick">Yoga</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ар</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949510} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1949510">
                        <span className="_nick">Dontel</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Дайте ключик пж</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Диана</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1951462} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1951462">
                        <span className="_nick">KImmyBlack</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>А как в перетасовку попасть?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1949510} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1949510">
                        <span className="_nick">Dontel</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>1</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Сколько надо побед?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1885949} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:04 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/1885949">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Диана</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Режим игры заходишь в раздел начать игру и 3 пункт
                          увидишь перетасовка
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1945379} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:05 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1945379">
                        <span className="_nick">Евгений Басота</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>ауе</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={125189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:05 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/125189">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Brave spirit</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/1839189"
                          className="SmartReplacer-mention"
                        >
                          Tricky
                        </a>
                        <span>, 25</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1078559} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:05 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/this_is_dima">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">Итальянец из Спарты</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <img
                          src="//m1.dogecdn.wtf/chat/eDoge.svg"
                          alt="Doge"
                          kd-tooltip="Doge"
                          kd-tooltip-option-position="center"
                          className="emoticon _loaded"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={284587} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:05 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/prorok">
                        <span className="_nick">Proro4ek</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>
                          Ребятки. У кого есть не нужны кейсы, готов забрать или
                          обменять на что-то из моего инвентаря!!
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1845293} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:06 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1845293">
                        <span className="_nick">Илья</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Ну есть</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:06 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Илья</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1270927} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:06 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1270927">
                        <span className="_nick">ПОБЕДИТЕЛЬ☆</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>+3</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:06 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Дашь кейс?</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1839189} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:06 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1839189">
                        <span className="_nick">Tricky</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Или что-то ещё?)</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1821614} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:07 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/xsubtw">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">xsu.</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Накиньте 30 копеек, плез</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1821614} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:07 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user _vip">
                      <a href="/profile/xsubtw">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 261 236"
                          className="_star"
                        >
                          <path d="M130 0l31 90h100l-81 56 31 90-81-56-80 56 31-90L0 90h100z" />
                        </svg>
                        <span className="_nick">xsu.</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>Не хватает</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={1270927} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:07 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/1270927">
                        <span className="_nick">ПОБЕДИТЕЛЬ☆</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <span>+2</span>
                      </span>
                    </span>
                  </span>
                </div>
                <div data-userid={130928} className="GchatHistory-one">
                  <div className="GchatHistory-one-meta">
                    <span className="_time">14:07 </span>
                    <span className="_button _reply" />
                  </div>
                  <span>
                    <div className="GchatHistory-user">
                      <a href="/profile/130928">
                        <span className="_nick">Тимурик</span>
                        <span className="_online" />
                      </a>
                    </div>
                    <span className="GchatHistory-text _user">
                      <span
                        className="SmartReplacer"
                        at-emoticonloaded="emoticonLoaded"
                      >
                        <a
                          href="/profile/xsubtw"
                          className="SmartReplacer-mention"
                        >
                          xsu.
                        </a>
                        <span>, как</span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="paragraph Gchat-create">
              <input
                type="text"
                maxLength={200}
                placeholder="Введите сообщение и нажмите Enter"
              />
              <div
                mnpl-emote="Popcorn"
                className="emotes-button"
                style={{
                  backgroundImage: 'url("//m1.dogecdn.wtf/chat/ePopcorn.svg")',
                }}
              ></div>
            </div>
          </div>
          <div className="VueGamesRooms">
            <div className="block block-notrimcontent">
              <div className="title title-3">
                Ожидают игры{" "}
                <input
                  type="button"
                  defaultValue="Создать игру"
                  className="button title-button button-grass"
                />
              </div>
              <div className="VueGamesRooms-list">
                <div
                  id="roomTGjrCeJg"
                  mnpl-room_id="TGjrCeJg"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_2"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_wormhole">
                          <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M54 14a4 4 0 0 0 0-8 44 44 0 0 0 0 88h2a34 34 0 0 0 0-68h-2a24 24 0 0 0 0 48h2a14 14 0 0 0 0-28h-2a4 4 0 0 0 0 8h2a6 6 0 0 1 0 12h-2a16 16 0 0 1 0-32h2a26 26 0 0 1 0 52h-2a36 36 0 0 1 0-72z"
                              className="_fill"
                            />
                          </svg>
                          <div>С порталом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://d1.dogecdn.wtf/729824411451916358/JzPSin6PgFhV.jpg")',
                          }}
                        >
                          <a href="/profile/1870365" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1870365">Ra^-_^sa_DobRie)</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ed0/KF-hhwKnJsA.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://tg.dogecdn.wtf/v2/AgACAgIAAx0EWSIHJgACPwRfDMu5UIBkcad7CyW2E2GQAXW4hQACQa4xG-oM6UtM8R0r9ShyGmQNBZIuAAMBAAMCAAN5AANgRwMAARoE.jpg")',
                          }}
                        >
                          <a href="/profile/1878036" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1878036">Beast</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ea4/YIhDRqWq3w0.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_vs _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://sun9-51.userapi.com/c855324/v855324546/218ab8/UFlcupX91XQ.jpg?ava=1")',
                          }}
                        >
                          <a href="/profile/1560903" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1560903">Даяна</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ec0/fNR5QPCkH0g.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://d1.dogecdn.wtf/738047322977599578/IJ9EJcagHbhk.jpg")',
                          }}
                        >
                          <a href="/profile/1560918" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1560918">Isa</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17e9d/WPxa8mUKMjA.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="roomqaqwf8Cp"
                  mnpl-room_id="qaqwf8Cp"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_2"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_wormhole">
                          <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M54 14a4 4 0 0 0 0-8 44 44 0 0 0 0 88h2a34 34 0 0 0 0-68h-2a24 24 0 0 0 0 48h2a14 14 0 0 0 0-28h-2a4 4 0 0 0 0 8h2a6 6 0 0 1 0 12h-2a16 16 0 0 1 0-32h2a26 26 0 0 1 0 52h-2a36 36 0 0 1 0-72z"
                              className="_fill"
                            />
                          </svg>
                          <div>С порталом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://sun9-44.userapi.com/c855036/v855036930/22527b/qOsF-oBDazU.jpg?ava=1")',
                          }}
                        >
                          <a href="/profile/1604316" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1604316">Бизнесмен_есса</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/182f2/HDG-RI5IKu0.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://d1.dogecdn.wtf/545173479918534666/8c3e8290.jpg")',
                          }}
                        >
                          <a href="/profile/692211" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/692211">Елена</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ea4/YIhDRqWq3w0.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_vs _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{}}
                        ></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{}}
                        ></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="roomzWywxDui"
                  mnpl-room_id="zWywxDui"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_0"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_jackpot">
                          <svg
                            viewBox="0 0 31.36 23.87"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g className="_fill">
                              <path d="M20.94 23.87H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h17.94a3 3 0 0 1 3 3v17.87a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v17.87a1 1 0 0 0 1 1h17.94a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" />
                              <path d="M18.13 12.7H5.81a3 3 0 0 1-3-3V7.55a3 3 0 0 1 3-3h12.32a3 3 0 0 1 3 3V9.7a3 3 0 0 1-3 3zM5.81 6.55a1 1 0 0 0-1 1V9.7a1 1 0 0 0 1 1h12.32a1 1 0 0 0 1-1V7.55a1 1 0 0 0-1-1H5.81zm20.45 10.31a1 1 0 0 1-1-1v-4.91l3.36-5.08a1 1 0 0 1 1.67 1.1l-3.03 4.58v4.3a1 1 0 0 1-1 1z" />
                              <circle
                                cx="29.4"
                                cy="6.51"
                                r="1.96"
                                transform="rotate(-56.47 29.4 6.5)"
                              />
                              <path d="M9.25 12.7a1 1 0 0 1-1-1V5.55a1 1 0 1 1 2 0v6.15a1 1 0 0 1-1 1zm5.44 0a1 1 0 0 1-1-1V5.55a1 1 0 0 1 2 0v6.15a1 1 0 0 1-1 1zm2.58 6.08H6.67a1 1 0 1 1 0-2h10.6a1 1 0 0 1 0 2z" />
                            </g>
                          </svg>
                          <div>С джекпотом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://sun6-13.userapi.com/i-5PRy09AOkyKqR1R3UWEJQ5zXgacb_DGGXj0g/qvX44WxmvKw.jpg?ava=1")',
                          }}
                        >
                          <a href="/profile/1707987" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1707987">Денис</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17eb9/2xcXbl0yIlM.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{}}
                        ></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="room0HyUjiA9"
                  mnpl-room_id="0HyUjiA9"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_0"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_jackpot">
                          <svg
                            viewBox="0 0 31.36 23.87"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g className="_fill">
                              <path d="M20.94 23.87H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h17.94a3 3 0 0 1 3 3v17.87a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v17.87a1 1 0 0 0 1 1h17.94a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" />
                              <path d="M18.13 12.7H5.81a3 3 0 0 1-3-3V7.55a3 3 0 0 1 3-3h12.32a3 3 0 0 1 3 3V9.7a3 3 0 0 1-3 3zM5.81 6.55a1 1 0 0 0-1 1V9.7a1 1 0 0 0 1 1h12.32a1 1 0 0 0 1-1V7.55a1 1 0 0 0-1-1H5.81zm20.45 10.31a1 1 0 0 1-1-1v-4.91l3.36-5.08a1 1 0 0 1 1.67 1.1l-3.03 4.58v4.3a1 1 0 0 1-1 1z" />
                              <circle
                                cx="29.4"
                                cy="6.51"
                                r="1.96"
                                transform="rotate(-56.47 29.4 6.5)"
                              />
                              <path d="M9.25 12.7a1 1 0 0 1-1-1V5.55a1 1 0 1 1 2 0v6.15a1 1 0 0 1-1 1zm5.44 0a1 1 0 0 1-1-1V5.55a1 1 0 0 1 2 0v6.15a1 1 0 0 1-1 1zm2.58 6.08H6.67a1 1 0 1 1 0-2h10.6a1 1 0 0 1 0 2z" />
                            </g>
                          </svg>
                          <div>С джекпотом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://d1.dogecdn.wtf/740491493730549831/hyKv5HUzXkMJ.jpg")',
                          }}
                        >
                          <a href="/profile/1735834" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1735834">soovaaa</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ed0/KF-hhwKnJsA.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{}}
                        ></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_vs _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://sun9-67.userapi.com/c851324/v851324140/2f6cd/XD-qbiOOsrk.jpg?ava=1")',
                          }}
                        >
                          <a href="/profile/1761080" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1761080">Анатолий</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17e9d/WPxa8mUKMjA.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{}}
                        ></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="room5Am1zKud"
                  mnpl-room_id="5Am1zKud"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_2"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_jackpot">
                          <svg
                            viewBox="0 0 31.36 23.87"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g className="_fill">
                              <path d="M20.94 23.87H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h17.94a3 3 0 0 1 3 3v17.87a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v17.87a1 1 0 0 0 1 1h17.94a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" />
                              <path d="M18.13 12.7H5.81a3 3 0 0 1-3-3V7.55a3 3 0 0 1 3-3h12.32a3 3 0 0 1 3 3V9.7a3 3 0 0 1-3 3zM5.81 6.55a1 1 0 0 0-1 1V9.7a1 1 0 0 0 1 1h12.32a1 1 0 0 0 1-1V7.55a1 1 0 0 0-1-1H5.81zm20.45 10.31a1 1 0 0 1-1-1v-4.91l3.36-5.08a1 1 0 0 1 1.67 1.1l-3.03 4.58v4.3a1 1 0 0 1-1 1z" />
                              <circle
                                cx="29.4"
                                cy="6.51"
                                r="1.96"
                                transform="rotate(-56.47 29.4 6.5)"
                              />
                              <path d="M9.25 12.7a1 1 0 0 1-1-1V5.55a1 1 0 1 1 2 0v6.15a1 1 0 0 1-1 1zm5.44 0a1 1 0 0 1-1-1V5.55a1 1 0 0 1 2 0v6.15a1 1 0 0 1-1 1zm2.58 6.08H6.67a1 1 0 1 1 0-2h10.6a1 1 0 0 1 0 2z" />
                            </g>
                          </svg>
                          <div>С джекпотом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user _norank">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://m1.dogecdn.wtf/default_avatar.png")',
                          }}
                        >
                          <a href="/profile/1749104" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1749104">pipirka</a>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="roomPACBCE8I"
                  mnpl-room_id="PACBCE8I"
                  className="VueGamesRoomsOne _game_mode_0 _game_submode_0"
                >
                  <div className="VueGamesRoomsOne-body">
                    <div className="VueGamesRoomsOne-body-head">
                      <div className="VueGamesRoomsOne-body-head-info">
                        <div className="_type">
                          <div />
                        </div>

                        <div className="_with_jackpot">
                          <svg
                            viewBox="0 0 31.36 23.87"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g className="_fill">
                              <path d="M20.94 23.87H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h17.94a3 3 0 0 1 3 3v17.87a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v17.87a1 1 0 0 0 1 1h17.94a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" />
                              <path d="M18.13 12.7H5.81a3 3 0 0 1-3-3V7.55a3 3 0 0 1 3-3h12.32a3 3 0 0 1 3 3V9.7a3 3 0 0 1-3 3zM5.81 6.55a1 1 0 0 0-1 1V9.7a1 1 0 0 0 1 1h12.32a1 1 0 0 0 1-1V7.55a1 1 0 0 0-1-1H5.81zm20.45 10.31a1 1 0 0 1-1-1v-4.91l3.36-5.08a1 1 0 0 1 1.67 1.1l-3.03 4.58v4.3a1 1 0 0 1-1 1z" />
                              <circle
                                cx="29.4"
                                cy="6.51"
                                r="1.96"
                                transform="rotate(-56.47 29.4 6.5)"
                              />
                              <path d="M9.25 12.7a1 1 0 0 1-1-1V5.55a1 1 0 1 1 2 0v6.15a1 1 0 0 1-1 1zm5.44 0a1 1 0 0 1-1-1V5.55a1 1 0 0 1 2 0v6.15a1 1 0 0 1-1 1zm2.58 6.08H6.67a1 1 0 1 1 0-2h10.6a1 1 0 0 1 0 2z" />
                            </g>
                          </svg>
                          <div>С джекпотом</div>
                        </div>
                      </div>
                      <div className="VueGamesRoomsOne-body-head-actions"></div>
                    </div>
                    <div className="VueGamesRoomsOne-body-members">
                      <div className="VueGamesRoomsOne-body-members-one _slot_user">
                        <div
                          className="VueGamesRoomsOne-body-members-one-avatar"
                          style={{
                            backgroundImage:
                              'url("https://m1.dogecdn.wtf/default_avatar.png")',
                          }}
                        >
                          <a href="/profile/1602505" />
                          <div className="_online" />
                        </div>
                        <div className="VueGamesRoomsOne-body-members-one-nick">
                          <a href="/profile/1602505">Okckij</a>
                        </div>
                        <div
                          className="VueGamesRoomsOne-body-members-one-rank"
                          style={{
                            backgroundImage:
                              'url("https://vk.dogecdn.wtf/pp.userapi.com/c622626/v622626553/17ec0/fNR5QPCkH0g.jpg")',
                          }}
                        />
                      </div>
                      <div className="VueGamesRoomsOne-body-members-one _slot_join _norank">
                        <div className="VueGamesRoomsOne-body-members-one-avatar"></div>
                        <div className="VueGamesRoomsOne-body-members-one-nick"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} />
          </div>
        </div>
      </div>
      ;
    </Template>
  );
};
