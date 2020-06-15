import React, { useEffect } from "react";
import { Field, BoardField } from "../Field/Field";
import nanoid from "nanoid";

interface Prop {
  fields: BoardField[];
}
export const Board = (prop: Prop) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div id="ui-fields" className="table-body-board-fields">
        {prop.fields.map((field) => (
          <Field
            key={nanoid(4)}
            fieldPosition={field.fieldPosition}
            price={
              field.status?.paymentMultiplier
                ? field.status?.paymentMultiplier
                : field.status?.updatedPrice
                ? field.status.updatedPrice
                : field.price
            }
            imgSrc={field.imgSrc}
            fieldGroup={field.fieldGroup}
            fieldLine={field.fieldLine}
            name={field.name}
            fieldSpecial={field.fieldSpecial}
            fieldCorner={field.fieldCorner}
            isJail={field.isJail}
            status={field.status}
            type={field.type}
            currency={field.currency}
          />
        ))}
      </div>
    </>
  );
};
