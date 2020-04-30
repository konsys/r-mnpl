import { FieldStatus } from "../types/BoardTypes";
import { fieldsStore } from "../stores/FieldsStore";
import { setFieldsEvent } from "../stores/FieldsStore";

export const fieldsHandler = (fields: FieldStatus[]) => {
  const store = fieldsStore.getState();
  console.log(111111111111, fields);
  store.fields.map((storeField, index) => {
    const f = fields.find(
      (messageField) => messageField.fieldId === storeField.fieldId
    );

    if (index) {
      store.fields[index] = {
        ...storeField,
        status: f,
      };
    }
    return null;
  });
  setFieldsEvent({ ...store, version: ++store.version });
};
