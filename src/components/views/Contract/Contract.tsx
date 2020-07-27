import {
  closeContractModal,
  contractStore,
} from "../../../stores/ContractStore";

import { ContractCompany } from "./ContractCompany";
import React from "react";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";

export const Contract = () => {
  const contract = useStore(contractStore);
  const user = useStore(userStore);

  return (
    <>
      {contract && contract.fromUserId === user?.userId && (
        <div className="TableContract" style={{}}>
          <div className="TableContract-top">
            <div className="TableContract-top-title">Договор</div>
            <div
              className="TableContract-top-close"
              onClick={() => closeContractModal()}
            ></div>
          </div>
          <div className="TableContract-content">
            <div className="TableContract-content-head">
              <div className="_user_index_0">
                <div
                  className="_avatar"
                  style={{
                    backgroundImage:
                      "url(&quot;https://d1.dogecdn.wtf/730835360107724820/XkwxZrGMKv96.jpg&quot;)",
                  }}
                ></div>
                <div className="_info">
                  <div className="_nick">Вы</div>
                  <div className="_subtitle">предлагаете</div>
                </div>
              </div>
              <div className="_user_index_1">
                <div
                  className="_avatar"
                  style={{
                    backgroundImage:
                      'url("https://m1.dogecdn.wtf/default_avatar.png")',
                  }}
                ></div>
                <div className="_info">
                  <div className="_nick">NN</div>
                  <div className="_subtitle">отдаёт</div>
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
                      <div className="_one _cash _clickable">
                        <div className="_image"></div>
                        <div className="_info">
                          <div className="_title">
                            0k <span className="_edit"></span>
                          </div>
                          <div className="_subtitle">Наличные</div>
                        </div>
                      </div>

                      {!!contract.fieldsFrom.length &&
                        contract.fieldsFrom.map((f) => (
                          <ContractCompany field={f} />
                        ))}
                    </div>
                    <div className="scr-pane" style={{ display: "none" }}>
                      <div
                        className="scr-pane-handler"
                        style={{ transform: "translateY(0px)}" }}
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
                      <div className="_one _cash _clickable">
                        <div className="_image"></div>
                        <div className="_info">
                          <div className="_title">
                            0k <span className="_edit"></span>
                          </div>
                          <div className="_subtitle">Наличные</div>
                        </div>
                      </div>
                      {!!contract.fieldsTo.length &&
                        contract.fieldsTo.map((f) => (
                          <ContractCompany field={f} />
                        ))}
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
              <div className="_sum">0</div>
              <div className="_text">Общая сумма</div>
              <div className="_sum">0</div>
            </div>
          </div>
          <div className="TableContract-actions">
            <div className="_button">Предложить</div>
            {/* <div className="_future">Future</div> */}
          </div>
        </div>
      )}
    </>
  );
};
