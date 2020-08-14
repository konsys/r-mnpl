import "./styles/styles.scss";

import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import OneColumnContent from "./OneColumnContent";
import React from "react";
import TwoColumnContent from "./TwoColumnContent";

export default function Template({
  children,
  columns,
}: {
  children?: any;
  columns: 1 | 2;
}) {
  return (
    <>
      <Header />
      {columns === 1 && <OneColumnContent>{children}</OneColumnContent>}
      {columns === 2 && <TwoColumnContent>{children}</TwoColumnContent>}
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }} />
    </>
  );
}
