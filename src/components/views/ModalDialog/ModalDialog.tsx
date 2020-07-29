import React from "react";

export const ModalDialog = () => {
  return (
    <div className="designDialog" style={{}}>
      <div className="designDialog-one">
        <div className="_container">
          <div className="vueDesignDialog" style={{ overflow: "visible" }}>
            <div className="vueDesignDialog-title">Ошибка</div>
            <div className="vueDesignDialog-content">
              <div className="vueDesignDialog-content">
                Наличные в договоре могут быть только с одной стороны.
              </div>
            </div>
            <div className="vueDesignDialog-buttons">
              <button type="button" className="button button-free button-small">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
