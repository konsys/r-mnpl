import {
  FieldType,
  IField,
  IFieldModalPosition,
} from "../../../../types/types";
import React, { useEffect } from "react";
import {
  addFieldToContract,
  contract$,
} from "../../../../stores/Board/ContractStore";
import {
  closeFieldActionEvent,
  fieldActionStore,
  fieldsStore,
  setFieldActionEffect,
} from "../../../../stores/Board/FieldsStore";

import { BOARD_PARAMS } from "../../../../params/boardParams";
import { Field } from "../Field/Field";
import { FieldActions } from "../Field/FieldActions/FieldAction";
import { useStore } from "effector-react";
import { user$ } from "../../../../stores/Game/UserStore";

export const Board = () => {
  const { fields } = useStore(fieldsStore);
  const fieldActionId = useStore(fieldActionStore);
  const contract = useStore(contract$);
  const user = useStore(user$);

  const getFieldActionPosition = (field: IField): IFieldModalPosition => {
    switch (field.fieldLine) {
      case 0:
        return {
          top: 105,
          left: 25 + (field.fieldPosition - 1) * BOARD_PARAMS.FIELD_WIDTH,
        };
      case 1:
        return field.fieldPosition < 16
          ? {
              top: 105 + (field.fieldPosition - 11) * BOARD_PARAMS.FIELD_WIDTH,
              left: 380,
            }
          : {
              top: (field.fieldPosition - 13) * BOARD_PARAMS.FIELD_WIDTH,
              left: 380,
            };
      case 2:
        return {
          top: 240,
          left: 450 - (field.fieldPosition - 21) * BOARD_PARAMS.FIELD_WIDTH,
        };

      case 3:
        return field.fieldPosition > 34
          ? {
              top: 105 + (39 - field.fieldPosition) * BOARD_PARAMS.FIELD_WIDTH,
              left: 105,
            }
          : {
              top: (39 - field.fieldPosition) * BOARD_PARAMS.FIELD_WIDTH - 110,
              left: 105,
            };

      default:
        return { top: 240, left: 105 };
    }
  };

  const closeFieldAction = (event: any) => {
    (!event.target && !event.target.id && closeFieldActionEvent()) ||
      (event.target.id &&
        !(event.target.id.indexOf("field") > -1) &&
        closeFieldActionEvent());
  };

  useEffect(() => {
    document.addEventListener("click", closeFieldAction, false);
    return () => {
      document.removeEventListener("click", closeFieldAction, false);
    };
  }, []);

  const onClick = (f: IField) => {
    if (
      f.type === FieldType.AUTO ||
      f.type === FieldType.COMPANY ||
      f.type === FieldType.IT
    ) {
      if (contract && user && contract.fromUserId === user.userId) {
        addFieldToContract({
          fromUserId: user.userId,
          toUserId: contract.toUserId,
          field: f,
        });
      } else {
        setFieldActionEffect(f.fieldId || 0);
      }
    } else {
      closeFieldActionEvent();
    }

    return false;
  };

  return (
    <>
      <div id="ui-fields" className="table-body-board-fields">
        {fields &&
          fields.map((f, index) => (
            <Field
              key={(f && f.fieldId) || index}
              {...f}
              onClick={() => onClick(f)}
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
                />
              )
            );
          })}
      </div>
    </>
  );
};
