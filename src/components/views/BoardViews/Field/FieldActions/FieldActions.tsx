import {
  FieldType,
  IField,
  IFieldAction,
  IFieldModalPosition,
  OutcomeMessageType,
} from "../../../../../types/types";

import { FieldActionAuto } from "./FieldActionAuto";
import { FieldActionCompany } from "./FieldActionCompany";
import { FieldActionIT } from "./FieldActionIT";
import React from "react";
import { closeFieldActionEvent } from "../../../../../stores/Board/FieldsStore";
import { getActingPlayer } from "../../../../../utils/players.utils";
import { sendBoardAction } from "stores/Board/ActionStore";

export interface IFieldModal extends IField {
  position: IFieldModalPosition;
  isActive: boolean;
}

export const FieldActions = ({
  fieldGroup,
  fieldGroupName,
  price,
  rent,
  position,
  isActive,
  name,
  description,
  type,
  status,
  fieldId,
}: IFieldModal) => {
  const player = getActingPlayer();
  return (
    <div
      className="TableFieldcard"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        display: isActive ? "block" : "none",
      }}
    >
      <div className={`TableFieldcard-top _mnpl_color_${fieldGroup}`}>
        <div className="TableFieldcard-top-main">{name}</div>
        <div className="TableFieldcard-top-sub">{fieldGroupName}</div>
      </div>
      <div className="_bg">
        <div className="TableFieldcard-buttons">
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions &&
            status.fieldActions.indexOf(IFieldAction.MORTGAGE) > -1 && (
              <div
                className="_mortgage"
                onClick={() => {
                  sendBoardAction({
                    action: OutcomeMessageType.OUTCOME_MORTGAGE_FIELD_CLICKED,
                    fieldId,
                  });
                  closeFieldActionEvent();
                }}
              >
                Заложить
              </div>
            )}
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions &&
            status.fieldActions.indexOf(IFieldAction.UNMORTGAGE) > -1 && (
              <div
                className="_unmortgage"
                onClick={() => {
                  sendBoardAction({
                    action:
                      OutcomeMessageType.OUTCOME_UN_MORTGAGE_FIELD_CLICKED,
                    fieldId,
                  });
                  closeFieldActionEvent();
                }}
              >
                Выкупить
              </div>
            )}
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions &&
            status.fieldActions.indexOf(IFieldAction.LEVEL_UP) > -1 && (
              <div
                className="_level_up"
                onClick={() => {
                  sendBoardAction({
                    action: OutcomeMessageType.OUTCOME_LEVEL_UP_FIELD_CLICKED,
                    fieldId,
                  });
                  closeFieldActionEvent();
                }}
              >
                Построить
              </div>
            )}
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions &&
            status.fieldActions.indexOf(IFieldAction.LEVEL_DOWN) > -1 && (
              <div
                className="_level_down"
                onClick={() => {
                  sendBoardAction({
                    action: OutcomeMessageType.OUTCOME_LEVEL_DOWN_FIELD_CLICKED,
                    fieldId,
                  });
                  closeFieldActionEvent();
                }}
              >
                Продать
              </div>
            )}
        </div>
        <div className="TableFieldcard-data">
          <div className="TableFieldcard-data-rich">
            <div>{description}</div>
          </div>
          {(rent && type === FieldType.COMPANY && (
            <FieldActionCompany {...rent} />
          )) ||
            (rent && type === FieldType.AUTO && (
              <FieldActionAuto {...rent} />
            )) ||
            (rent && type === FieldType.IT && <FieldActionIT {...rent} />)}
          <div className="TableFieldcard-data-rows">
            <div>
              <div className="_title">Стоимость поля</div>
              <div className="_value _type_money">
                {price && price.startPrice}
              </div>
            </div>
            <div>
              <div className="_title">Залог поля</div>
              <div className="_value _type_money">
                {price && price.pledgePrice}
              </div>
            </div>
            <div>
              <div className="_title">Выкуп поля</div>
              <div className="_value _type_money">
                {price && price.buyoutPrice}
              </div>
            </div>
            {price && price.branchPrice > 0 && (
              <div>
                <div className="_title">Покупка филиала</div>
                <div className="_value _type_money">
                  {price && price.branchPrice}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
