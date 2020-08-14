import "./styles/styles.scss";

import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import OneColumnContent from "./OneColumnContent";
import React from "react";
import TwoColumnContent from "./TwoColumnContent";
import { useTranslation } from "react-i18next";

export default function Template({
  children,
  columns,
  title,
}: {
  children?: any;
  columns: 1 | 2;
  title: string;
}) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t(title)}</title>
      </Helmet>
      <Header />
      {columns === 1 && <OneColumnContent>{children}</OneColumnContent>}
      {columns === 2 && <TwoColumnContent>{children}</TwoColumnContent>}
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }} />
    </>
  );
}
