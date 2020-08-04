import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";
import Nc from "./Nc";
import React from "react";

export default function Template({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Nc />
      {children}
      <Messages />
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }}></div>
    </>
  );
}
