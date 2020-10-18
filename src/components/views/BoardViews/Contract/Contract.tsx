import {
  IContract,
  IField,
  IUser,
  OutcomeMessageType,
} from "../../../../types/types";
import { IDialogStore, showDialog } from "../../../../stores/Board/DialogStore";
import React, { useState } from "react";
import {
  addMoneyToContract,
  closeContractModal,
} from "../../../../stores/Board/ContractStore";
import {
  gameActionFx,
  sendBoardAction,
} from "../../../../stores/Board/ActionStore";

import { ContractCompany } from "./ContractCompany";
import { getField } from "../../../../utils/fields.utils";
import { getPlayer } from "../../../../utils/players.utils";
import { sample } from "lodash";

export enum KeyCode {
  ENTER = 13,
}

export const validateContract = (contract: IContract): null | IDialogStore => {
  if (!contract.fieldIdsFrom.length && !contract.fieldIdsTo.length) {
    return {
      title: "Ошибка",
      message: "В договоре должно быть хотя бы одно поле.",
    };
  } else if (contract.moneyFrom && contract.moneyTo) {
    return {
      title: "Ошибка",
      message: "Наличные в договоре могут быть только с одной стороны.",
    };
  } else if (
    (contract.moneyFrom + contract.fieldFromPrice) / 2 >
      contract.moneyTo + contract.fieldToPrice ||
    (contract.moneyTo + contract.fieldToPrice) / 2 >
      contract.moneyFrom + contract.fieldFromPrice
  ) {
    return {
      title: "Ошибка",
      message:
        "Разница между суммой предлагаемого и запрашиваемого не может превышать 50%.",
    };
  }
  return null;
};

export const Contract = ({
  contract,
  user,
}: {
  contract: IContract;
  user: IUser;
}) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const [valueFrom, setValueFrom] = useState<string>("");
  const [valueTo, setValueTo] = useState<string>("");

  // gameActionFx.done.watch(() => {
  //   user &&
  //     (user.userId === contract.fromUserId ||
  //       user.userId === contract.toUserId) &&
  //     closeContractModal();
  // });

  sample({
    clock: gameActionFx.done,
    source: gameActionFx,
    fn: () => closeContractModal(),
  });
  const onContractSubmit = () => {
    setActiveInput(0);
    const res = validateContract(contract);
    res
      ? showDialog(res)
      : sendBoardAction({
          action: OutcomeMessageType.OUTCOME_CONTRACT_START,
          contract,
        });
  };

  const onChange = (e: any) => {
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
    }

    setValueFrom("");
    setValueTo("");
  };

  const fromUser = getPlayer(contract.fromUserId);
  const toUser = getPlayer(contract.toUserId);

  const contractType =
    user && contract.fromUserId === user.userId ? "from" : "to";

  return (
    <>
      {contract &&
        user &&
        (contract.fromUserId === user.userId ||
          contract.toUserId === user.userId) && (
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
                                setActiveInput(
                                  (fromUser && fromUser.userId) || 0
                                )
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
                <div className="_sum">
                  {contract.moneyFrom + contract.fieldFromPrice}
                </div>
                <div className="_text">Общая сумма</div>
                <div className="_sum">
                  {contract.moneyTo + contract.fieldToPrice}
                </div>
              </div>
            </div>
            <div className="TableContract-actions">
              {contractType === "from" ? (
                <div className="_button _accept" onClick={onContractSubmit}>
                  Предложить
                </div>
              ) : (
                <>
                  <div
                    className="_button"
                    onClick={() =>
                      sendBoardAction({
                        action: OutcomeMessageType.OUTCOME_CONTRACT_ACCEPT,
                        contract,
                      })
                    }
                  >
                    Принять
                  </div>
                  <div
                    onClick={() =>
                      sendBoardAction({
                        action: OutcomeMessageType.OUTCOME_CONTRACT_DECLINE,
                        contract,
                      })
                    }
                    className="_button _button_negative"
                  >
                    Отклонить
                  </div>
                </>
              )}

              {/* <div className="_future">Future</div> */}
            </div>
          </div>
        )}
    </>
  );
};
