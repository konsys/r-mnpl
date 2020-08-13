import { Box } from "@material-ui/core";
import Counters from "./Counters";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";
import Nc from "./Nc";
import React from "react";

export default function Template({ children }: { children: any }) {
  return (
    <Box
      m={0}
      p={2}
      display="flex"
      flexDirection="row"
      style={{ backgroundColor: "white" }}
    >
      <Header />
      <Nc />
      {children}
      <Messages />
      <Footer />
      <Counters />
      <div className="designDialog" style={{ display: "none" }}></div>
    </Box>
  );
}
