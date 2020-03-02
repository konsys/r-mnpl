import React from "react";

export const Chat = () => (
  <>
    <div className="table-body-board-chat scr" scr-active="1">
      <div
        className="scr-window"
        style={{ width: "525px", height: "439px", paddingTop: "439px" }}
      >
        <div className="scr-content" style={{ width: "475px" }} />
        <div className="scr-pane" style={{ display: "none" }}>
          <div
            className="scr-pane-handler"
            style={{ transform: "translateY(0px)" }}
          />
        </div>
      </div>
    </div>
    <div className="table-body-board-chatbottom">
      <div className="_channel" mnpl-ch="all" />
      <div className="_input">
        <input placeholder="Введите сообщение" max-lenght={200} />
        <div
          mnpl-emote="Rip"
          className="emotes-button"
          style={{ backgroundImage: `url("//m1.dogecdn.wtf/chat/eRip.svg")` }}
        ></div>
        <div className="_hint _hint_tab">
          Теперь можно писать конкретному игроку!
          <br />
          <span />, чтобы выбрать получателя.
        </div>
      </div>
      <div className="_hidekeyboard" />
      <div className="_screenshot" style={{ display: "none" }} />
      <div className="_fullscreen" />
      <div className="_fullscreenoff" style={{ display: "none" }} />
      <div className="_helper" />
    </div>
  </>
);
