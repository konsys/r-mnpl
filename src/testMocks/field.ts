import { FieldType, IField } from "types/types";

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
