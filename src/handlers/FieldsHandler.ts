import { FieldStatus } from "../types/BoardTypes";
import { fieldsStore } from "../stores/FieldsStore";
import { setFieldsEvent } from "../stores/FieldsStore";
import _ from "lodash";

export const fieldsHandler = (messageFieldsStatus: FieldStatus[]) => {
  const store = fieldsStore.getState();
  let toUpdateStore = false;

  messageFieldsStatus.forEach((status) => {
    const storeFieldIndex = store.fields.findIndex(
      (storeField) => storeField.fieldId === status.fieldId
    );

    const currentField = store.fields[storeFieldIndex];

    if (!_.isEqual(status, currentField.status)) {
      store.fields[storeFieldIndex] = {
        ...store.fields[storeFieldIndex],
        status,
      };
      toUpdateStore = true;
    }
  });

  toUpdateStore && setFieldsEvent({ ...store, version: ++store.version });
};
