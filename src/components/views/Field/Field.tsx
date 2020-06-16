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
  type: FieldType;
  currency?: string;
}

// export const Field = React.memo((props: BoardField) => {

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
    type,
    currency,
  } = props;

  return (
    <>
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
        {(type === FieldType.AUTO ||
          type === FieldType.COMPANY ||
          type === FieldType.IT) && (
          <div
            mnpl-currency={currency}
            className="table-body-board-fields-one-label"
          >
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
    </>
  );
};
