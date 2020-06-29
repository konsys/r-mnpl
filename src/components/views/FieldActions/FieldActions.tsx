import React from "react";
import {
  IFieldRent,
  IFieldPrice,
  IFieldModalPosition,
} from "../../../types/BoardTypes";

interface Prop {
  position: IFieldModalPosition;
  fieldGroup: number;
  name: string;
  groupName: string;
  rent: IFieldRent;
  price: IFieldPrice;
  isActive: boolean;
}

export const FieldActions = (prop: Prop) => {
  return (
    <div
      className="TableFieldcard"
      style={{
        top: `${prop.position.top}px`,
        left: `${prop.position.left}px`,
        display: prop.isActive ? "block" : "none",
      }}
    >
      <div className={`TableFieldcard-top _mnpl_color_${prop.fieldGroup}`}>
        <div className="TableFieldcard-top-main">{prop.name}</div>
        <div className="TableFieldcard-top-sub">{prop.groupName}</div>
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
              <div className="_value _type_money">{prop.rent.baseRent}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{prop.rent.oneStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{prop.rent.twoStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{prop.rent.freeStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
                <span className="_star_small"></span>
              </div>
              <div className="_value _type_money">{prop.rent.fourStar}</div>
            </div>
            <div>
              <div className="_title">
                <span className="_star_big"></span>
              </div>
              <div className="_value _type_money">{prop.rent.bigStar}</div>
            </div>
          </div>
          <div className="TableFieldcard-data-rows">
            <div>
              <div className="_title">Стоимость поля</div>
              <div className="_value _type_money">{prop.price.startPrice}</div>
            </div>
            <div>
              <div className="_title">Залог поля</div>
              <div className="_value _type_money">{prop.price.pledgePrice}</div>
            </div>
            <div>
              <div className="_title">Выкуп поля</div>
              <div className="_value _type_money">{prop.price.buyoutPrice}</div>
            </div>
            <div>
              <div className="_title">Покупка филиала</div>
              <div className="_value _type_money">{prop.price.branchPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
