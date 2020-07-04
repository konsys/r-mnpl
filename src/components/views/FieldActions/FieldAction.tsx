import React from "react";
import {
  IFieldModalPosition,
  IField,
  FieldType,
  IFieldAction,
} from "../../../types/types";
import { FieldActionCompany } from "./FieldActionCompany";
import { FieldActionAuto } from "./FieldActionAuto";
import { FieldActionIT } from "./FieldActionIT";
import { getActingPlayer } from "../../../utils/players.utils";

export interface IFieldModal extends IField {
  position: IFieldModalPosition;
  isActive: boolean;
  onMortgage: () => void;
  onUnMortgage: () => void;
  levelUp: () => void;
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
  onMortgage,
  onUnMortgage,
  levelUp,
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
            status.fieldActions.indexOf(IFieldAction.MORTGAGE) > -1 && (
              <div className="_mortgage" onClick={onMortgage}>
                Заложить
              </div>
            )}
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions.indexOf(IFieldAction.UNMORTGAGE) > -1 && (
              <div className="_unmortgage" onClick={onUnMortgage}>
                Выкупить
              </div>
            )}
          {status &&
            player?.userId === status?.userId &&
            status.fieldActions.indexOf(IFieldAction.LEVEL_UP) > -1 && (
              <div className="_level_up" onClick={levelUp}>
                Построить
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
