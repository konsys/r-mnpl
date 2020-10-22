import { IFieldModal } from "components/views/BoardViews/Field/FieldActions/FieldActions";
import { testField } from "./field";

export const testFieldActions: IFieldModal = {
  ...testField,
  isActive: true,
  position: { top: 20, left: 20 },
};
