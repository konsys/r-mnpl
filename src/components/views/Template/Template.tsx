import "./styles/styles.scss";

import BuyGallery from "../GameVievs/BuyGallery";
import Content from "./Content";
import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Template({
  leftBlocks,
  centerBlocks,
}: {
  leftBlocks?: any[];
  centerBlocks: any[];
}) {
  return (
    <>
      <Header />
      <BuyGallery />
      <Content leftBlocks={leftBlocks} centerBlocks={centerBlocks} />
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }} />
    </>
  );
}
