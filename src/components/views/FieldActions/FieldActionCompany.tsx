import React from "react";
import { IFieldRent } from "../../../types/BoardTypes";

export const FieldActionCompany = (rent: IFieldRent) => {
  return (
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
  );
};
