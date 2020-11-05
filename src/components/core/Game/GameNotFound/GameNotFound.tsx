import React from "react";
import ToMainPage from "components/views/Errors/ToMainPageButton";
import { Typography } from "@material-ui/core";

export default function GameNotFound({ text }: { text: any }) {
  // TODO make page
  return (
    <div>
      <Typography>GNotFound {text}</Typography>
      <ToMainPage />
    </div>
  );
}
