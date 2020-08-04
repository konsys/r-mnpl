import Counters from "./Counters";
import Footer from "../Game/Footer";
import Header from "../Game/Header";
import Messages from "../Game/Messages";
import Nc from "../Game/Nc";
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
