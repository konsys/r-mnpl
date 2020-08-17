import { Chip, Grid, Typography } from "@material-ui/core";

import React from "react";
import Reply from "@material-ui/icons/Reply";
import StarOutlined from "@material-ui/icons/StarOutlined";
import moment from "moment";

export default function ChatMessage({
  vip,
  toVip,
  name,
  toName,
  message,
  time,
}: {
  vip: boolean;
  toVip: boolean;
  name: string;
  toName: string;
  message: string;
  time: Date;
}) {
  return (
    <>
      <Grid
        container
        alignContent="space-between"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item>{moment(time).format("HH:mm").toString()}</Grid>{" "}
        <Grid item>
          <Chip
            color={vip ? "secondary" : undefined}
            size="small"
            label={name}
            icon={
              <StarOutlined
                style={{
                  width: "15px",
                  height: "15px",
                  color: "white",
                }}
              />
            }
            style={{ color: "white" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Reply style={{ width: "15px", height: "15px" }} />
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            color={toVip ? "secondary" : undefined}
            size="small"
            label={toName}
            icon={
              <StarOutlined
                style={{
                  width: "15px",
                  height: "15px",
                  color: "white",
                }}
              />
            }
            style={{ color: "white" }}
          />
        </Grid>
        <Grid item>-</Grid>
        <Grid item>{message}</Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
