import React from "react";
export interface FieldProps {
  id: number;
  imgSrc?: string;
  name: string;
  mnplSpecial?: number;
  price?: number;
  mnplGroup?: number;
  mnplCorner?: number;
  mnplLine?: number;
  isJail?: boolean;
}

export const Field = (props: FieldProps) => {
  const {
    mnplCorner,
    mnplLine,
    mnplGroup,
    mnplSpecial,
    isJail,
    price,
    imgSrc
  } = props;

  return (
    <div
      mnpl-corner={mnplCorner}
      mnpl-line={mnplLine}
      mnpl-group={mnplGroup}
      mnpl-special={mnplSpecial}
      className="table-body-board-fields-one"
    >
      {price && (
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
      {!mnplSpecial && <div className="table-body-board-fields-one-level" />}
    </div>
  );
};
