import { FieldType, IField, IFieldAction } from "types/types";

import { ItemLevel } from "components/core/Game/Inventory/InventoryItem";

// import {FieldStatus} from ""

export const testField: IField = {
  fieldId: 1,
  level: ItemLevel.ECONOM,
  fieldGroup: 1,
  imgSrc: "testImgSrc",
  fieldGroupName: "testGroupName",
  fieldPosition: 1,
  name: "testName",
  type: FieldType.COMPANY,
  price: {
    branchPrice: 1000,
    buyoutPrice: 900,
    pledgePrice: 500,
    startPrice: 2000,
  },
  rent: {
    baseRent: 200,
    monopolyRent: 250,
    oneStar: 300,
    twoStar: 1000,
    freeStar: 1500,
    fourStar: 2000,
    bigStar: 3000,
  },
};

export const testOwnedField: IField = {
  status: {
    branches: 0,
    isMonopoly: false,
    fieldId: 1,
    userId: 1,
    mortgaged: 0,
    fieldActions: [
      IFieldAction.MORTGAGE,
      IFieldAction.LEVEL_UP,
      IFieldAction.LEVEL_DOWN,
    ],
  },
  fieldId: 1,
  fieldPosition: 1,
  level: ItemLevel.ECONOM,
  description: "testDescription",
  name: "testName",
  type: FieldType.COMPANY,
  price: {
    branchPrice: 1000,
    buyoutPrice: 900,
    pledgePrice: 500,
    startPrice: 2000,
  },
  rent: {
    baseRent: 200,
    monopolyRent: 250,
    oneStar: 300,
    twoStar: 1000,
    freeStar: 1500,
    fourStar: 2000,
    bigStar: 3000,
  },
};

export const testStaredField: IField = {
  status: {
    branches: 0,
    isMonopoly: false,
    fieldId: 1,
    userId: 1,
    mortgaged: 0,
    fieldActions: [
      IFieldAction.MORTGAGE,
      IFieldAction.LEVEL_UP,
      IFieldAction.LEVEL_DOWN,
    ],
  },
  fieldId: 1,
  level: ItemLevel.ECONOM,
  fieldPosition: 1,
  name: "testName",
  type: FieldType.COMPANY,
  price: {
    branchPrice: 1000,
    buyoutPrice: 900,
    pledgePrice: 500,
    startPrice: 2000,
  },
  rent: {
    baseRent: 200,
    monopolyRent: 250,
    oneStar: 300,
    twoStar: 1000,
    freeStar: 1500,
    fourStar: 2000,
    bigStar: 3000,
  },
};

export const testMortgagedField: IField = {
  status: {
    branches: 0,
    isMonopoly: false,
    fieldId: 1,
    userId: 1,
    mortgaged: 1,
    fieldActions: [IFieldAction.UNMORTGAGE],
  },
  fieldId: 1,
  level: ItemLevel.ECONOM,
  fieldPosition: 1,
  name: "testName",
  type: FieldType.COMPANY,
  price: {
    branchPrice: 1000,
    buyoutPrice: 900,
    pledgePrice: 500,
    startPrice: 2000,
  },
  rent: {
    baseRent: 200,
    monopolyRent: 250,
    oneStar: 300,
    twoStar: 1000,
    freeStar: 1500,
    fourStar: 2000,
    bigStar: 3000,
  },
};

export const testJailField: IField = {
  fieldId: 10,
  level: ItemLevel.ECONOM,
  fieldPosition: 10,
  name: "jail",
  type: FieldType.JAIL,
  fieldCorner: 2,
  fieldLine: 1,
  isJail: true,
};
