import "./styles/styles.scss";

import Content from "./Content";
import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Template({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Content /> {children}
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }}></div>{" "}
    </>
  );
}
