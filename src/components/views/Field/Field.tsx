import React from "react";
import { FieldType, IField } from "../../../types/BoardTypes";
import { useStore } from "effector-react";
import { playersStore } from "../../../stores/PlayersStore";

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
}: IField) => {
  const players = useStore(playersStore).players;
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
        onClick={onClick}
      >
        {(type === FieldType.AUTO ||
          type === FieldType.COMPANY ||
          type === FieldType.IT) && (
          <div
            mnpl-currency={currency}
            className="table-body-board-fields-one-label"
          >
            <div>
              {status?.userId
                ? (status?.level === 1 && rent?.baseRent) ||
                  (status?.level === 2 && rent?.oneStar) ||
                  (status?.level === 3 && rent?.twoStar) ||
                  (status?.level === 4 && rent?.freeStar) ||
                  (status?.level === 5 && rent?.fourStar) ||
                  (status?.level === 6 && rent?.bigStar)
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
            style={{ backgroundImage: `url(${imgSrc}` }}
          />
        </div>
        {!fieldSpecial && <div className="table-body-board-fields-one-level" />}
      </div>
    </>
  );
};
