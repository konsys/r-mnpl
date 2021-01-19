import "./styles/styles.scss";

import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import OneColumnContent from "./content/OneColumnContent";
import React from "react";
import { TemplateModules } from "types/types";
import TwoColumnContent from "./content/TwoColumnContent";
import { useTranslation } from "react-i18next";

// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

export default function Template({
  children,
  columns,
  title,
  modules,
}: {
  children?: any;
  columns: 1 | 2;
  title: string;
  modules?: TemplateModules[];
}) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t(title)}</title>
      </Helmet>
      <Header />
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://loft-concept.ru/upload/iblock/80a/Loft_Concept_1.jpg)",
        }}
      ></div> */}
      {columns === 1 && <OneColumnContent>{children}</OneColumnContent>}
      {columns === 2 && (
        <TwoColumnContent modules={modules}>{children}</TwoColumnContent>
      )}
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }} />
    </>
  );
}
