import { FieldStatus } from "../types/types";
import { fieldsStore } from "../stores/FieldsStore";
import { setFieldsEvent } from "../stores/FieldsStore";
import _ from "lodash";

export const fieldsHandler = (messageFieldsStatus: FieldStatus[]) => {
  // statusFieldsIterate(messageFieldsStatus);
  allFieldsIterate(messageFieldsStatus);
};

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
  // let toUpdateStore = false;

  store.fields.forEach((storeField, index) => {
    const messageFieldStatus = messageFieldsStatus.find(
      (messageField) => messageField.fieldId === storeField.fieldId
    );

    if (messageFieldStatus) {
      console.log(11111);
      store.fields[index] = {
        ...store.fields[index],
        status: messageFieldStatus,
      };
      // toUpdateStore = true;
    } else {
      console.log(2222);
      store.fields[index] = {
        ...store.fields[index],
        status: undefined,
      };
    }
  });

  // toUpdateStore &&
  setFieldsEvent({ ...store, version: ++store.version });
};
