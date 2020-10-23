import { IFieldRent } from "../../../../../types/types";
import React from "react";

export const FieldActionCompany = (rent: IFieldRent) => {
  return (
    <div className="TableFieldcard-data-rows">
      <div>
        <div className="_title">
          <span>Базовая рента</span>
        </div>
        <div className="_value _type_money _base_rent">
          {rent && rent.baseRent}
        </div>
      </div>
      <div>
        <div className="_title">
          <span className="_star_small"></span>
        </div>
        <div className="_value _type_money _one_star_rent">
          {rent && rent.oneStar}
        </div>
      </div>
      <div>
        <div className="_title">
          <span className="_star_small"></span>
          <span className="_star_small"></span>
        </div>
        <div className="_value _type_money _two_star_rent">
          {rent && rent.twoStar}
        </div>
      </div>
      <div>
        <div className="_title">
          <span className="_star_small"></span>
          <span className="_star_small"></span>
          <span className="_star_small"></span>
        </div>
        <div className="_value _type_money _free_star_rent">
          {rent && rent.freeStar}
        </div>
      </div>
      <div>
        <div className="_title">
          <span className="_star_small"></span>
          <span className="_star_small"></span>
          <span className="_star_small"></span>
          <span className="_star_small"></span>
        </div>
        <div className="_value _type_money _four_star_rent">
          {rent && rent.fourStar}
        </div>
      </div>
      <div>
        <div className="_title">
          <span className="_star_big"></span>
        </div>
        <div className="_value _type_money _big_star_rent">
          {rent && rent.bigStar}
        </div>
      </div>
    </div>
  );
};
