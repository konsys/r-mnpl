import { testField, testMortgagedField, testOwnedField } from "./field";

import { IFieldModal } from "components/views/BoardViews/Field/FieldActions/FieldActions";

export const testFieldActions: IFieldModal = {
  ...testField,
  isActive: true,

  position: { top: 20, left: 20 },
};

export const testOwnedFieldActions: IFieldModal = {
  ...testOwnedField,
  isActive: true,

  position: { top: 20, left: 20 },
};

export const testStaredFieldActions: IFieldModal = {
  ...testOwnedField,
  isActive: true,

  position: { top: 20, left: 20 },
};

export const testMortgagedFieldActions: IFieldModal = {
  ...testMortgagedField,
  isActive: true,

  position: { top: 20, left: 20 },
};
