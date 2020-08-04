import React from "react";

export default function Messages() {
  return (
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
  );
}
