import { FieldStatus } from "../types/types";
import { fieldsStore } from "../stores/FieldsStore";
import { setFieldsEvent } from "../stores/FieldsStore";
import _ from "lodash";

export const fieldsHandler = (messageFieldsStatus: FieldStatus[]) => {
  allFieldsIterate(messageFieldsStatus);
};

// Not used
export const statusFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fieldsStore.getState();
  let toUpdateStore = false;

  messageFieldsStatus.forEach((status) => {
    const storeFieldIndex = store.fields.findIndex(
      (storeField) => storeField.fieldId === status.fieldId
    );

    const currentField = store.fields[storeFieldIndex];

    if (currentField && !_.isEqual(status, currentField.status)) {
      store.fields[storeFieldIndex] = {
        ...store.fields[storeFieldIndex],
        status,
      };
      toUpdateStore = true;
    }
  });

  toUpdateStore && setFieldsEvent({ ...store, version: ++store.version });
};

export const allFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fieldsStore.getState();

  store.fields &&
    store.fields.forEach((storeField, index) => {
      const messageFieldStatus = messageFieldsStatus.find(
        (messageField) => messageField.fieldId === storeField.fieldId
      );

      if (messageFieldStatus) {
        store.fields[index] = {
          ...store.fields[index],
          status: messageFieldStatus,
        };
      } else {
        store.fields[index] = {
          ...store.fields[index],
          status: undefined,
        };
      }
    });
  setFieldsEvent({ ...store, version: ++store.version });
};
