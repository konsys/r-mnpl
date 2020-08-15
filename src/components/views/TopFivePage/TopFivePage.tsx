import React from "react";
import Template from "../Template/Template";
import { useTranslation } from "react-i18next";

export default function TopFivePage() {
  const { t } = useTranslation();
  return (
    <>
      <Template columns={1} title={t("Top Five")}>
        TopFive Page
      </Template>
    </>
  );
}
