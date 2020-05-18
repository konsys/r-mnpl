import React from "react";
import { FieldStatus, FieldType } from "../../../types/BoardTypes";
import { useStore } from "effector-react";
import { playersStore } from "../../../stores/PlayersStore";
export interface BoardField {
  fieldId?: number;
  fieldPosition: number;
  imgSrc?: string;
  name: string;
  fieldSpecial?: number;
  price?: number;
  fieldGroup?: number;
  fieldCorner?: number;
  fieldLine?: number;
  isJail?: boolean;
  status?: FieldStatus;
  fieldType: FieldType;
}

export const Field = (props: BoardField) => {
  const players = useStore(playersStore).players;

  const {
    fieldCorner,
    fieldLine,
    fieldGroup,
    fieldSpecial,
    isJail,
    price,
    imgSrc,
    status,
    fieldType,
  } = props;

  const field = (
    <div
      mnpl-corner={fieldCorner}
      mnpl-line={fieldLine}
      mnpl-group={fieldGroup}
      mnpl-special={fieldSpecial}
      mnpl-owner={
        status && players.find((v) => v.userId === status.userId)?.moveOrder
      }
      className="table-body-board-fields-one"
    >
      {console.log(2222222, fieldType)}
      {(fieldType === FieldType.AUTO ||
        fieldType === FieldType.COMPANY ||
        fieldType === FieldType.IT) && (
        <div className="table-body-board-fields-one-label">
          <div>{price}</div>
        </div>
      )}

      <div className="table-body-board-fields-one-body">
        {isJail && (
          <>
            <div className="_jail-visit" />
            <div className="_jail-cell">
              <div />
            </div>
          </>
        )}
        <div className="_logo" style={{ backgroundImage: `url(${imgSrc}` }} />
      </div>
      {!fieldSpecial && <div className="table-body-board-fields-one-level" />}
    </div>
  );

  return <>{field}</>;
};
