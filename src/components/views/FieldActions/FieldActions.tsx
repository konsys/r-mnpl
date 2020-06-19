import React from "react";

interface IFieldRent {
  baseRent: number;
  oneStar: number;
  twoStar: number;
  freeStar: number;
  fourStar: number;
  bigStar: number;
}

interface IFieldPrice {
  startPrice: number;
  pledgePrice: number;
  buyoutPrice: number;
  branchPrice: number;
}

interface IFieldModalPosition {
  top: number;
  left: number;
}

interface Prop {
  position: IFieldModalPosition;
  fieldGroup: number;
  name: string;
  groupName: string;
  rent: IFieldRent;
  price: IFieldPrice;
}

export const FieldActions = (prop: Prop) => (
  <div
    className="TableFieldcard"
    style={{ top: `${prop.position.top}px`, left: `${prop.position.left}px` }}
  >
    <div className="TableFieldcard-top _mnpl_color_3">
      <div className="TableFieldcard-top-main">Вконтакте</div>
      <div className="TableFieldcard-top-sub">Веб-сервисы</div>
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
            <div className="_value _type_money">100</div>
          </div>
          <div>
            <div className="_title">
              <span className="_star_small"></span>
            </div>
            <div className="_value _type_money">500</div>
          </div>
          <div>
            <div className="_title">
              <span className="_star_small"></span>
              <span className="_star_small"></span>
            </div>
            <div className="_value _type_money">1,500</div>
          </div>
          <div>
            <div className="_title">
              <span className="_star_small"></span>
              <span className="_star_small"></span>
              <span className="_star_small"></span>
            </div>
            <div className="_value _type_money">4,500</div>
          </div>
          <div>
            <div className="_title">
              <span className="_star_small"></span>
              <span className="_star_small"></span>
              <span className="_star_small"></span>
              <span className="_star_small"></span>
            </div>
            <div className="_value _type_money">6,250</div>
          </div>
          <div>
            <div className="_title">
              <span className="_star_big"></span>
            </div>
            <div className="_value _type_money">7,500</div>
          </div>
        </div>
        <div className="TableFieldcard-data-rows">
          <div>
            <div className="_title">Стоимость поля</div>
            <div className="_value _type_money">1,400</div>
          </div>
          <div>
            <div className="_title">Залог поля</div>
            <div className="_value _type_money">700</div>
          </div>
          <div>
            <div className="_title">Выкуп поля</div>
            <div className="_value _type_money">840</div>
          </div>
          <div>
            <div className="_title">Покупка филиала</div>
            <div className="_value _type_money">750</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
