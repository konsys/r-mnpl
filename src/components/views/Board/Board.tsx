import React from "react";
import { Field, BoardField } from "../Field/Field";

interface Prop {
  fields: BoardField[];
  fieldsVersion: number;
}

export const Board = (prop: Prop) => {
  const fields = () => (
    <div id="ui-fields" className="table-body-board-fields">
      {prop.fields.map((field, index) => (
        <Field
          key={(field && field.fieldId) || index}
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
  );

  return <>{fields()}</>;
};
