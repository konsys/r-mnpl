import React from "react";
import { Field } from "../Field/Field";
import { IFieldsStore } from "../../../stores/FieldsStore";

export const Board = ({ fields }: IFieldsStore) => {
  const renderMe = () => (
    <div id="ui-fields" className="table-body-board-fields">
      {fields &&
        fields.map((field, index) => (
          <Field
            key={(field && field.fieldId) || index}
            fieldPosition={field.fieldPosition}
            price={field.price}
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
            rent={field.rent}
          />
        ))}
    </div>
  );

  return <>{renderMe()}</>;
};
