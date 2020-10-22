import { FieldType, IField, IPlayer } from "../../../../types/types";

import React from "react";
import { createImgPath } from "utils/fields.utils";

interface IProps extends IField {
  players: IPlayer[];
}
export const Field = ({
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
  rent,
  fieldPosition,
  onClick,
  players,
}: IProps) => {
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
        className={"table-body-board-fields-one"}
        onClick={onClick}
        mnpl-mortgaged={status?.mortgaged && 1}
      >
        {(type === FieldType.AUTO ||
          type === FieldType.COMPANY ||
          type === FieldType.IT) && (
          <div
            mnpl-currency={currency}
            className={`table-body-board-fields-one-label`}
          >
            <div>
              {status?.userId
                ? (status?.branches === 0 &&
                    status?.isMonopoly &&
                    rent?.monopolyRent) ||
                  (status?.branches === 0 && rent?.baseRent) ||
                  (status?.branches === 1 && rent?.oneStar) ||
                  (status?.branches === 2 && rent?.twoStar) ||
                  (status?.branches === 3 && rent?.freeStar) ||
                  (status?.branches === 4 && rent?.fourStar) ||
                  (status?.branches === 5 && rent?.bigStar)
                : price?.startPrice}
            </div>
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
          <div
            className="_logo"
            id={`field-${fieldPosition}`}
            style={{ backgroundImage: `url(${createImgPath(imgSrc || "")}` }}
          />
        </div>
        {type === FieldType.COMPANY &&
          status &&
          status?.branches > 0 &&
          status?.branches < 5 && (
            <div className="table-body-board-fields-one-level">
              {new Array(status?.branches).fill(0).map((k, v) => (
                <span className="_small" key={v}></span>
              ))}
            </div>
          )}
        {type === FieldType.COMPANY && status && status?.branches === 5 && (
          <div className="table-body-board-fields-one-level">
            <span className="_big"></span>
          </div>
        )}
        {!fieldSpecial && <div className="table-body-board-fields-one-level" />}
        {status && status.mortgaged > 0 && (
          <div className="table-body-board-fields-one-mortgaged">
            <div className="">
              <span>{status?.mortgaged} </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
