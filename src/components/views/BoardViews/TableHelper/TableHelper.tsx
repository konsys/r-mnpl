import React from "react";

export const TableHelper = () => (
  <>
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
              <div>2:42</div>
              <div>время игры</div>
            </div>
            <div className="_round">
              <div>4</div>
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
                    backgroundImage: `url("https://d1.dogecdn.wtf/636899545225101312/990a61e4.jpg")`
                  }}
                ></div>
                <div className="_nick">Гром_ка</div>
              </div>
              <div>12,780</div>
              <div>180</div>
            </div>
            <div className="TableHelper-content-players-row">
              <div>
                <div className="_dot _index_1"></div>
                <div
                  className="_avatar"
                  style={{
                    backgroundImage: `url("https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg")`
                  }}
                ></div>
                <div className="_nick">Константин</div>
              </div>
              <div>13,260</div>
              <div>0</div>
            </div>
            <div className="TableHelper-content-players-row">
              <div>
                <div className="_dot _index_2"></div>
                <div
                  className="_avatar"
                  style={{
                    backgroundImage: `url("https://d1.dogecdn.wtf/522142515353223178/554a52b7.jpg")`
                  }}
                ></div>
                <div className="_nick">Кармен</div>
              </div>
              <div>15,000</div>
              <div>0</div>
            </div>
            <div className="TableHelper-content-players-row">
              <div>
                <div className="_dot _index_3"></div>
                <div
                  className="_avatar"
                  style={{
                    backgroundImage: `url("https://sun9-52.userapi.com/c628726/v628726484/51a78/znmeVQcGm2A.jpg?ava=1")`
                  }}
                ></div>
                <div className="_nick">Влад</div>
              </div>
              <div>12,360</div>
              <div>160</div>
            </div>
          </div>
          <div className="TableHelper-content-viewers"></div>
        </div>
      </div>
    </div>
  </>
);
