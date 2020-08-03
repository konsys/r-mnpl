import { dialogStore, hideDialog } from "../../../../stores/DialogStore";

import React from "react";
import { useStore } from "effector-react";

export const ModalDialog = () => {
  const dialog = useStore(dialogStore);
  return (
    <>
      {dialog.title && dialog.message && (
        <div className="designDialog" style={{}}>
          <div className="designDialog-one">
            <div className="_container">
              <div className="vueDesignDialog" style={{ overflow: "visible" }}>
                <div className="vueDesignDialog-title">{dialog.title}</div>
                <div className="vueDesignDialog-content">
                  <div className="vueDesignDialog-content">
                    {dialog.message}
                  </div>
                </div>
                <div className="vueDesignDialog-buttons">
                  <button
                    type="button"
                    className="button button-free button-small"
                    onClick={() => hideDialog()}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
