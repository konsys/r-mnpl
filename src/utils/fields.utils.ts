import { FIELD_WIDTH, MARGIN_CENTER, TABLE_SIZE } from "./boardParams";

import { IField } from "../types/types";
import { fieldsStore } from "../stores/FieldsStore";

export const createTurnsArray = (
  position: number,
  stopPosition: number
): number[] => {
  const usedFields = [];
  let currentPosition = position;

  while (currentPosition !== stopPosition) {
    currentPosition++;
    if (currentPosition > 39) {
      currentPosition = 0;
    }
    usedFields.push(currentPosition);
  }
  return usedFields;
};

export interface IFieldPositions {
  positionNumber: number;
  left: number;
  top: number;
}

export const fieldPositions = () => {
  const fieldPositions: IFieldPositions[] = [];

  for (let i = 0; i < 40; i++) {
    let left = 0;
    let top = 0;
    if (i >= 0 && i <= 10) {
      left = FIELD_WIDTH * (i + 1) + 2;
      top = MARGIN_CENTER;
      if (i === 10) {
        left += 45;
        top -= 25;
      } else if (i === 0) {
        left -= 25;
      }
      fieldPositions.push({
        positionNumber: i,
        left,
        top,
      });
    } else if (i >= 11 && i <= 20) {
      left = TABLE_SIZE - MARGIN_CENTER;
      top = FIELD_WIDTH * (i - 9) + 2;
      if (i === 20) {
        top += 25;
      }
      fieldPositions.push({
        positionNumber: i,
        left,
        top,
      });
    } else if (i >= 21 && i <= 30) {
      left = TABLE_SIZE - FIELD_WIDTH * (i - 19) - 2;
      top = TABLE_SIZE - MARGIN_CENTER;
      if (i === 30) {
        left -= 25;
      }
      fieldPositions.push({
        positionNumber: i,
        left,
        top,
      });
    } else if (i >= 31 && i <= 39) {
      left = MARGIN_CENTER;
      top = TABLE_SIZE - FIELD_WIDTH * (i - 29) - 2;
      fieldPositions.push({
        positionNumber: i,
        left,
        top,
      });
    }
  }
  return fieldPositions;
};

export const getFieldById = (fieldId: number): IField | undefined => {
  const f = fieldsStore.getState();
  return f ? f.fields.find((v) => v.fieldId === fieldId) : undefined;
};
