import React from "react";
import { IFieldModalPosition, IField } from "../../../types/BoardTypes";

interface Prop extends IField {
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
}: Prop) => {
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
            <div>Стройте филиалы, чтобы увеличить ренту.</div>
          </div>
          <div className="TableFieldcard-data-rows">
            <div>
              <div className="_title">
                <span>Базовая рента</span>
              </div>
              <div className="_value _type_money">{rent && rent.baseRent}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{rent && rent.oneStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{rent && rent.twoStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{rent && rent.freeStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{rent && rent.fourStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_big"></span>
              </div>
              <div className="_value _type_money">{rent && rent.bigStar}</div>
            </div>
          </div>
          <div className="TableFieldcard-data-rows">
            <div>
              <div className="_title">Стоимость поля</div>
              <div className="_value _type_money">
                {(price && price.startPrice) || 0}
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
