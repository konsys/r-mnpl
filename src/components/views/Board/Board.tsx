import React, { useEffect } from "react";
import { Field } from "../Field/Field";
import {
  fieldsStore,
  setFieldActionEvent,
  fieldActionStore,
  setFieldActionEffect,
} from "../../../stores/FieldsStore";
import { useStore } from "effector-react";
import { FieldActions } from "../FieldActions/FieldAction";
import { IField, IFieldModalPosition } from "../../../types/types";
import { FIELD_WIDTH } from "../../../params/boardParams";
import { mortgageFieldEffect } from "../../../stores/ModalStore";

export const Board = () => {
  const { fields } = useStore(fieldsStore);
  const fieldActionId = useStore(fieldActionStore);

  const getFieldActionPosition = (field: IField): IFieldModalPosition => {
    switch (field.fieldLine) {
      case 0:
        return { top: 105, left: 25 + (field.fieldPosition - 1) * FIELD_WIDTH };
      case 1:
        return field.fieldPosition < 16
          ? { top: 105 + (field.fieldPosition - 11) * FIELD_WIDTH, left: 380 }
          : { top: (field.fieldPosition - 13) * FIELD_WIDTH, left: 380 };
      case 2:
        return {
          top: 240,
          left: 450 - (field.fieldPosition - 21) * FIELD_WIDTH,
        };

      case 3:
        return field.fieldPosition > 34
          ? { top: 105 + (39 - field.fieldPosition) * FIELD_WIDTH, left: 105 }
          : { top: (39 - field.fieldPosition) * FIELD_WIDTH - 110, left: 105 };

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

  const onMortgage = (fieldId: number) =>
    mortgageFieldEffect({
      fieldId,
    });

  console.log(22222, fieldActionId);
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
          fields.map((field, index) => {
            return (
              field.fieldGroupName && (
                <FieldActions
                  key={(field && field.fieldId) || index}
                  {...field}
                  position={getFieldActionPosition(field)}
                  isActive={field.fieldId === fieldActionId}
                  onMortgage={() => onMortgage(field.fieldId || 0)}
                />
              )
            );
          })}
      </div>
    </>
  );
};
