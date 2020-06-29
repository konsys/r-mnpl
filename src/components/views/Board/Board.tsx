import React, { useEffect } from "react";
import { Field } from "../Field/Field";
import {
  fieldsStore,
  setFieldActionEvent,
  fieldActionStore,
} from "../../../stores/FieldsStore";
import { useStore } from "effector-react";
import { FieldActions } from "../FieldActions/FieldActions";

export const Board = () => {
  const { fields } = useStore(fieldsStore);
  const fieldActionId = useStore(fieldActionStore);

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
                field.fieldId && setFieldActionEvent(field.fieldId);
                return false;
              }}
            />
          ))}
        {fields &&
          fields.map(
            (field, index) =>
              field.fieldGroup && (
                <FieldActions
                  key={(field && field.fieldId) || index}
                  {...field}
                  position={{ top: index * 15, left: index * 2 + 380 }}
                  isActive={field.fieldId === fieldActionId}
                />
              )
          )}
        3400
      </div>
    </>
  );
};
