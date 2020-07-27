import { IField } from "../../../types/types";
import React from "react";

export const ContractCompany = ({ field }: { field: IField }) => {
  return (
    <>
      {field.fieldId && (
        <div className="_one _field _deletable">
          <div
            className="_image"
            style={{
              backgroundImage:
                'url("https://m1.dogecdn.wtf/fields/brands/2_clothing/lacoste.svg")',
            }}
          ></div>
          <div className="_info">
            <div className="_title">{field.name}</div>
            <div className="_subtitle">{field.price?.startPrice}k</div>
          </div>
        </div>
      )}
    </>
  );
};
