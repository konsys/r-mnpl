import React from "react";

export const ContractModal = () => {
  return (
    <>
      <div className="TableContract" style={{}}>
        <div className="TableContract-top">
          <div className="TableContract-top-title">Договор</div>
        </div>
        <div className="TableContract-content">
          <div className="TableContract-content-head">
            <div className="_user_index_2">
              <div
                className="_avatar"
                style={{
                  backgroundImage:
                    'url("https://sun9-35.userapi.com/c836236/v836236358/48e3e/YwHa2xsc6cc.jpg?ava=1")',
                }}
              ></div>
              <div className="_info">
                <div className="_nick">Андрей</div>
                <div className="_subtitle">предлагает</div>
              </div>
            </div>
            <div className="_user_index_1">
              <div
                className="_avatar"
                style={{
                  backgroundImage:
                    'url("https://d1.dogecdn.wtf/730835360107724820/XkwxZrGMKv96.jpg")',
                }}
              ></div>
              <div className="_info">
                <div className="_nick">Вы</div>
                <div className="_subtitle">отдаёте</div>
              </div>
            </div>
          </div>
          <div className="TableContract-content-list">
            <div>
              <div className="scr" scr-active="1">
                <div
                  className="scr-window"
                  style={{ width: "262px", height: "294px" }}
                >
                  <div className="scr-content" style={{ width: "212px" }}>
                    <div className="_one _cash">
                      <div className="_image"></div>
                      <div className="_info">
                        <div className="_title">1,200k </div>
                        <div className="_subtitle">Наличные</div>
                      </div>
                    </div>
                  </div>
                  <div className="scr-pane" style={{ display: "none" }}>
                    <div
                      className="scr-pane-handler"
                      style={{ transform: "translateY(0px)" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="scr" scr-active="1">
                <div
                  className="scr-window"
                  style={{ width: "261px", height: "294px" }}
                >
                  <div className="scr-content" style={{ width: "211px" }}>
                    <div className="_one _field">
                      <div
                        className="_image"
                        style={{
                          backgroundImage:
                            'url("https://m1.dogecdn.wtf/fields/brands/1_perfumery/hugo_boss.svg")',
                        }}
                      ></div>
                      <div className="_info">
                        <div className="_title">Hugo Boss</div>
                        <div className="_subtitle">600k</div>
                      </div>
                    </div>
                  </div>
                  <div className="scr-pane" style={{ display: "none" }}>
                    <div
                      className="scr-pane-handler"
                      style={{ transform: "translateY(0px)" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="TableContract-content-bottom">
            <div className="_sum">1,200</div>
            <div className="_text">Общая сумма</div>
            <div className="_sum">600</div>
          </div>
        </div>
        <div className="TableContract-actions">
          <div className="_button">Принять</div>
          <div className="_button _button_negative">Отклонить</div>
          <div className="_future">Future</div>
        </div>
      </div>
      <div className="TableHelper" style={{ display: "none" }}>
        <div className="TableHelper-tabs _active_0">
          <div className="_stat _active">Статистика</div>
          <div className="_settings">Настройки</div>
        </div>
        <div className="TableHelper-content">
          <div>
            <div className="_matchtitle">
              <div className="_icon _game_submode_0"></div>
              <div className="_title">Обычная игра</div>
            </div>
            <div className="TableHelper-content-stat">
              <div className="_time">
                <div>4:34</div>
                <div>время игры</div>
              </div>
              <div className="_round">
                <div>12</div>
                <div>раунд</div>
              </div>
              <div className="_roundtax _mod_0">
                <div>2,000k</div>
                <div></div>
              </div>
            </div>
            <div className="TableHelper-content-players">
              <div className="TableHelper-content-players-head">
                <div></div>
                <div className="_sortable _active">Активы</div>
                <div className="_sortable">Счёт</div>
              </div>
              <div className="TableHelper-content-players-row">
                <div>
                  <div className="_dot _index_0"></div>
                  <div
                    className="_avatar"
                    style={{
                      backgroundImage:
                        'url("https://m1.dogecdn.wtf/default_avatar.png")',
                    }}
                  ></div>
                  <div className="_nick">UXUS</div>
                </div>
                <div>10,090</div>
                <div>120</div>
              </div>
              <div className="TableHelper-content-players-row">
                <div>
                  <div className="_dot _index_1"></div>
                  <div
                    className="_avatar"
                    style={{
                      backgroundImage:
                        'url("https://d1.dogecdn.wtf/730835360107724820/XkwxZrGMKv96.jpg")',
                    }}
                  ></div>
                  <div className="_nick">✡✡✡</div>
                </div>
                <div>12,190</div>
                <div>520</div>
              </div>
              <div className="TableHelper-content-players-row">
                <div>
                  <div className="_dot _index_2"></div>
                  <div
                    className="_avatar"
                    style={{
                      backgroundImage:
                        'url("https://sun9-35.userapi.com/c836236/v836236358/48e3e/YwHa2xsc6cc.jpg?ava=1")',
                    }}
                  ></div>
                  <div className="_nick">Андрей</div>
                </div>
                <div>11,020</div>
                <div>820</div>
              </div>
            </div>
            <div className="TableHelper-content-viewers"></div>
          </div>
        </div>
      </div>
    </>
  );
};
