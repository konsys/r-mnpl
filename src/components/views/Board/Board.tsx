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
              fieldPosition={field.fieldPosition}
              price={field.price}
              imgSrc={field.imgSrc}
              fieldGroup={field.fieldGroup}
              fieldLine={field.fieldLine}
              name={field.name}
              fieldSpecial={field.fieldSpecial}
              fieldCorner={field.fieldCorner}
              isJail={field.isJail}
              status={field.status}
              type={field.type}
              currency={field.currency}
              rent={field.rent}
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
                  fieldGroup={field.fieldGroup}
                  name={field.name + "1"}
                  groupName={field.fieldGroupName || ""}
                  price={{
                    branchPrice: field.price?.branchPrice || 0,
                    buyoutPrice: field.price?.buyoutPrice || 0,
                    pledgePrice: field.price?.pledgePrice || 0,
                    startPrice: field.price?.startPrice || 0,
                  }}
                  position={{ top: index * 15, left: index * 2 + 380 }}
                  rent={{
                    baseRent: field.rent?.baseRent || 0,
                    oneStar: field.rent?.oneStar || 0,
                    twoStar: field.rent?.twoStar || 0,
                    freeStar: field.rent?.freeStar || 0,
                    fourStar: field.rent?.fourStar || 0,
                    bigStar: field.rent?.bigStar || 0,
                  }}
                  isActive={field.fieldId === fieldActionId}
                />
              )
          )}
        3400
      </div>
    </>
  );
};
