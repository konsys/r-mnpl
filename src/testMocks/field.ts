import { FieldStatus, FieldType, IField, IFieldAction } from "types/types";

import { FieldActions } from "components/views/BoardViews/Field/FieldActions/FieldAction";

// import {FieldStatus} from ""

export const testField: IField = {
  fieldId: 1,
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
    level: 0,
    branches: 0,
    isMonopoly: false,
    fieldId: 1,
    userId: 1,
    mortgaged: 0,
    fieldActions: [IFieldAction.MORTGAGE],
  },
  fieldId: 1,
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
  fieldPosition: 10,
  name: "jail",
  type: FieldType.JAIL,
  fieldCorner: 2,
  fieldLine: 1,
  isJail: true,
};
