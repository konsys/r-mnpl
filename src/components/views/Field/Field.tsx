import React from "react";
import { FieldStatus } from "../../../types/BoardTypes";

export interface BoardField {
  fieldId?: number;
  fieldPosition: number;
  imgSrc?: string;
  name: string;
  mnplSpecial?: number;
  price?: number;
  mnplGroup?: number;
  mnplCorner?: number;
  mnplLine?: number;
  isJail?: boolean;
  status?: FieldStatus;
}

export const Field = (props: BoardField) => {
  const {
    mnplCorner,
    mnplLine,
    mnplGroup,
    mnplSpecial,
    isJail,
    price,
    imgSrc,
    status,
  } = props;

  const field = (
    <div
      mnpl-corner={mnplCorner}
      mnpl-line={mnplLine}
      mnpl-group={mnplGroup}
      mnpl-special={mnplSpecial}
      mnpl-owner={status && status.owner}
      className="table-body-board-fields-one"
    >
      {price && (
        <div className="table-body-board-fields-one-label">
          <div>{props.price}</div>
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
      {!mnplSpecial && <div className="table-body-board-fields-one-level" />}
    </div>
  );

  return <>{field}</>;
};
