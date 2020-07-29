import React, { useState } from "react";
import {
  addMoneyToContract,
  closeContractModal,
  contractStore,
  sendContract,
} from "../../../stores/ContractStore";

import { ContractCompany } from "./ContractCompany";
import { IField } from "../../../types/types";
import { getField } from "../../../utils/fields.utils";
import { getPlayer } from "../../../utils/players.utils";
import { showDialog } from "../../../stores/DialogStore";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";

export enum KeyCode {
  ENTER = 13,
}

export const Contract = () => {
  const contract = useStore(contractStore);
  const user = useStore(userStore);

  const [activeInput, setActiveInput] = useState<number>(0);
  const [valueFrom, setValueFrom] = useState<string>("");
  const [valueTo, setValueTo] = useState<string>("");

  const onChange = (e: any) => {
    // if (!e.target.value.match(/^[0-9]+$/)) return;
    const v = e.target.value.slice(0, 6);
    if (e.target && e.target.name === "from") {
      setValueFrom(v);
    } else if (e.target && e.target.name === "to") {
      setValueTo(v);
    }
  };

  const onKeyPress = (e: any) => {
    if (e.which !== KeyCode.ENTER) return;
    setActiveInput(0);

    const money = Number.parseInt(e.target.value);

    // if (e.target.value.match(/^[0-9]+$/)) {
    if (e.target.name === "from") {
      addMoneyToContract({
        fromUserId: contract.fromUserId,
        toUserId: contract.toUserId,
        money: !isNaN(money) ? money : 0,
      });
    } else if (e.target.name === "to") {
      addMoneyToContract({
        fromUserId: contract.toUserId,
        toUserId: contract.fromUserId,
        money: !isNaN(money) ? money : 0,
      });
      // setValueTo(e.target.value);
    }
    // }
    setValueFrom("");
    setValueTo("");
  };

  const onSubmit = () => {
    // TODO написать текст ошибок
    if (contract.moneyFrom && contract.moneyTo) {
      showDialog({
        title: "Ошибка",
        message: "Наличные в договоре могут быть только с одной стороны.",
      });
    } else if (!contract.fieldIdsFrom.length && !contract.fieldIdsTo.length) {
      showDialog({
        title: "Ошибка",
        message: "В договоре должно быть хотя бы одно поле.",
      });
    } else if (
      contract.moneyFrom * 2 > contract.moneyTo ||
      contract.moneyTo * 2 > contract.moneyFrom
    ) {
      showDialog({
        title: "Ошибка",
        message:
          "Разница между суммой предлагаемого и запрашиваемого не может превышать 50%.",
      });
    }
    setActiveInput(0);
    sendContract(contract);
  };

  const fromUser = getPlayer(contract.fromUserId);
  const toUser = getPlayer(contract.toUserId);

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
                    backgroundImage: `url("${fromUser && fromUser.avatar}")`,
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
                    backgroundImage: `url("${toUser && toUser.avatar}")`,
                  }}
                ></div>
                <div className="_info">
                  <div className="_nick">{`${toUser && toUser.name}`}</div>
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
                          <div
                            className="_title"
                            onClick={() =>
                              setActiveInput((fromUser && fromUser.userId) || 0)
                            }
                          >
                            {fromUser && activeInput !== fromUser.userId ? (
                              <>
                                {contract.moneyFrom}k
                                <span className="_edit" />
                              </>
                            ) : (
                              <input
                                type="number"
                                name="from"
                                onChange={onChange}
                                value={valueFrom}
                                onKeyPress={onKeyPress}
                              />
                            )}
                          </div>
                          <div className="_subtitle">Наличные</div>
                        </div>
                      </div>

                      {!!contract.fieldIdsFrom.length &&
                        contract.fieldIdsFrom.map((fId, k) => {
                          const f = getField(fId);
                          return (
                            <ContractCompany
                              field={f || ({} as IField)}
                              key={k}
                            />
                          );
                        })}
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
                          <div
                            className="_title"
                            onClick={() =>
                              setActiveInput((toUser && toUser.userId) || 0)
                            }
                          >
                            {toUser && activeInput !== toUser.userId ? (
                              <>
                                {contract.moneyTo}k <span className="_edit" />
                              </>
                            ) : (
                              <input
                                type="number"
                                name="to"
                                onChange={onChange}
                                value={valueTo}
                                onKeyPress={onKeyPress}
                              />
                            )}
                          </div>
                          <div className="_subtitle">Наличные</div>
                        </div>
                      </div>
                      {!!contract.fieldIdsTo.length &&
                        contract.fieldIdsTo.map((fId, k) => {
                          const f = getField(fId);
                          return (
                            <ContractCompany
                              field={f || ({} as IField)}
                              key={k}
                            />
                          );
                        })}
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
            <div className="_button" onClick={onSubmit}>
              Предложить
            </div>
            {/* <div className="_future">Future</div> */}
          </div>
        </div>
      )}
    </>
  );
};
