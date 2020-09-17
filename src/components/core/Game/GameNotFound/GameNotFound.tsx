import React from "react";
import ToMainPage from "components/views/Errors/ToMainPage";

export default function GameNotFound({ p }: { p: any }) {
  // TODO make page
  return (
    <>
      GNotFound {JSON.stringify(p)}
      <ToMainPage />
    </>
  );
}
