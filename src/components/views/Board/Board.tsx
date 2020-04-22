import React from "react";
import { Field, BoardField } from "../Field/Field";
import nanoid from "nanoid";

interface Prop {
  fields: BoardField[];
}
export const Board = (prop: Prop) => (
  <div id="ui-fields" className="table-body-board-fields">
    {prop.fields.map((field) => {
      return (
        <Field
          key={nanoid(4)}
          fieldPosition={field.fieldPosition}
          price={field.price}
          imgSrc={field.imgSrc}
          mnplGroup={field.mnplGroup}
          mnplLine={field.mnplLine}
          name={field.name}
          mnplSpecial={field.mnplSpecial}
          mnplCorner={field.mnplCorner}
          isJail={field.isJail}
          status={field.status}
        />
      );
    })}
  </div>
);
