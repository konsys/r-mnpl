import React, { useEffect } from "react";
import { Field } from "../Field/Field";
import {
  fieldsStore,
  setFieldActionEvent,
  fieldActionStore,
  setFieldActionEffect,
} from "../../../stores/FieldsStore";
import { useStore } from "effector-react";
import { FieldActions } from "../FieldActions/FieldActions";
import { IField, IFieldModalPosition } from "../../../types/BoardTypes";

export const Board = () => {
  const { fields } = useStore(fieldsStore);
  const fieldActionId = useStore(fieldActionStore);

  const getFieldActionPosition = (field: IField): IFieldModalPosition => {
    switch (field.fieldLine) {
      case 0:
        return { top: 105, left: 25 + (field.fieldPosition - 1) * 55 };
      case 1:
        return field.fieldPosition < 16
          ? { top: 105 + (field.fieldPosition - 11) * 55, left: 380 }
          : { top: (field.fieldPosition - 13) * 55, left: 380 };
      case 2:
        return { top: 240, left: 450 - (field.fieldPosition - 21) * 55 };

      case 3:
        return field.fieldPosition > 34
          ? { top: 105 + (39 - field.fieldPosition) * 55, left: 105 }
          : { top: (39 - field.fieldPosition) * 55 - 110, left: 105 };

      default:
        return { top: 240, left: 105 };
    }
  };

  const closeFieldAction = (event: any) => {
    (!event.target.id && setFieldActionEvent(0)) ||
      (event.target.id &&
        !(event.target.id.indexOf("field") > -1) &&
        setFieldActionEvent(0));
  };

  useEffect(() => {
    document.addEventListener("click", closeFieldAction, false);
    return () => {
      document.removeEventListener("click", closeFieldAction, false);
    };
  }, []);

  return (
    <>
      <div id="ui-fields" className="table-body-board-fields">
        {fields &&
          fields.map((field, index) => (
            <Field
              key={(field && field.fieldId) || index}
              {...field}
              onClick={() => {
                field.fieldId && setFieldActionEffect(field.fieldId);
                return false;
              }}
            />
          ))}
        {fields &&
          fields.map(
            (field, index) =>
              field.rent && (
                <FieldActions
                  key={(field && field.fieldId) || index}
                  {...field}
                  position={getFieldActionPosition(field)}
                  isActive={field.fieldId === fieldActionId}
                />
              )
          )}
      </div>
    </>
  );
};
