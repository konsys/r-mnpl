import { FieldStatus } from "../types/BoardTypes";
import { fieldsStore } from "../stores/FieldsStore";
import { setFieldsEvent } from "../stores/FieldsStore";
import _ from "lodash";

export const fieldsHandler = (fields: FieldStatus[]) => {
  const store = fieldsStore.getState();
  const updatedStore = store;
  updatedStore.fields.map((storeField, index) => {
    const f = fields.find(
      (messageField) => messageField.fieldId === storeField.fieldId
    );

    if (index) {
      updatedStore.fields[index] = {
        ...storeField,
        status: f,
      };
    }
    return null;
  });

  console.log(234234234, updatedStore);

  if (!_.isEqual(updatedStore, store)) {
    setFieldsEvent({ ...updatedStore, version: ++updatedStore.version });
  } else {
    console.log(111111111);
  }
};
