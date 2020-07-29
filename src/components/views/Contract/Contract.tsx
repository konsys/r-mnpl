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
      {contract && contract.fromUser.userId === user?.userId && (
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
                    backgroundImage: `url("${contract.fromUser.avatar}")`,
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
                    backgroundImage: `url("${contract.toUser.avatar}")`,
                  }}
                ></div>
                <div className="_info">
                  <div className="_nick">{`${contract.toUser.name}`}</div>
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
                        contract.fieldsFrom.map((f, k) => (
                          <ContractCompany field={f} key={k} />
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
                        contract.fieldsTo.map((f, k) => (
                          <ContractCompany field={f} key={k} />
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
              <div className="_sum">{contract.moneyFrom}</div>
              <div className="_text">Общая сумма</div>
              <div className="_sum">{contract.moneyTo}</div>
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
