import { Button, Typography } from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ToMainPage() {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <>
      <Button
        size={"medium"}
        variant="contained"
        color="primary"
        onClick={() => history.push("")}
      >
        <Typography variant="overline" noWrap>
          {t("Main page")}
        </Typography>
      </Button>
    </>
  );
}
