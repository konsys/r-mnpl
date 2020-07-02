import React from "react";
import { IFieldRent } from "../../../types/types";

export const FieldActionAuto = (rent: IFieldRent) => {
  return (
    <>
      <div className="TableFieldcard-data-rows">
        <div>
          <div className="_title">1 полe</div>
          <div className="_value _type_money">{rent && rent.baseRent}</div>
        </div>
        <div>
          <div className="_title">2 поля</div>
          <div className="_value _type_money">{rent && rent.oneStar}</div>
        </div>
        <div>
          <div className="_title">3 поля</div>
          <div className="_value _type_money">{rent && rent.twoStar}</div>
        </div>
        <div>
          <div className="_title">4 поля</div>
          <div className="_value _type_money">{rent && rent.freeStar}</div>
        </div>
      </div>
    </>
  );
};
