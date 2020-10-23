import { IFieldRent } from "../../../../../types/types";
import React from "react";

export const FieldActionAuto = (rent: IFieldRent) => {
  return (
    <>
      <div className="TableFieldcard-data-rows">
        <div>
          <div className="_title">1 полe</div>
          <div className="_value _type_money _base_rent">
            {rent && rent.baseRent}
          </div>
        </div>
        <div>
          <div className="_title">2 поля</div>
          <div className="_value _type_money _one_star_rent">
            {rent && rent.oneStar}
          </div>
        </div>
        <div>
          <div className="_title">3 поля</div>
          <div className="_value _type_money _two_star_rent">
            {rent && rent.twoStar}
          </div>
        </div>
        <div>
          <div className="_title">4 поля</div>
          <div className="_value _type_money _free_star_rent">
            {rent && rent.freeStar}
          </div>
        </div>
      </div>
    </>
  );
};
