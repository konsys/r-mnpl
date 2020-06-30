import React from "react";
import { IFieldModalPosition, IField } from "../../../types/BoardTypes";
import { FieldActionCompany } from "./FieldActionCompany";

export interface IFieldAction extends IField {
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
}: IFieldAction) => {
  console.log(1111111, rent);
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
          <div className="_mortgage">Заложить</div>
        </div>
        <div className="TableFieldcard-data">
          <div className="TableFieldcard-data-rich">
            <div>{description}</div>
          </div>
          {rent && <FieldActionCompany {...rent} />}
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
            <div>
              <div className="_title">Покупка филиала</div>
              <div className="_value _type_money">
                {price && price.branchPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
