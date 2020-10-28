import React from "react";

export enum ItemLevel {
  ECONOM = 1,
  STANDARD = 2,
  SPECIAL = 3,
  HIGHEST = 4,
  EXCLUSIVE = 5,
}

export interface IInventoryItem {
  img: string;
  name: string;
  level: ItemLevel;
}

export default function InventoryItem({ img, name, level }: IInventoryItem) {
  return (
    <>
      <div className="item">
        <div className="itemImage">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </div>
        <div className={`itemAbout level_${level}`}>
          <div>{name}</div>
        </div>
        <div className="itemMarks">
          <div className="itemMarksUsed"></div>
        </div>
      </div>
    </>
  );
}
