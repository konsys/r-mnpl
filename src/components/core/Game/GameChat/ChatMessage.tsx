import { Chip, Grid, Typography } from "@material-ui/core";

import React from "react";
import Reply from "@material-ui/icons/Reply";
import StarOutlined from "@material-ui/icons/StarOutlined";
import moment from "moment";
import { theme } from "../../../../theme";

export interface IChatMessage {
  vip: boolean;
  toVip: boolean;
  name: string;
  toName: string;
  message: string;
  time: Date;
}

export default function ChatMessage(props: IChatMessage) {
  return (
    <>
      <Grid
        container
        alignContent="space-between"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item>{moment(props.time).format("HH:mm").toString()}</Grid>{" "}
        <Grid item>
          <Chip
            color={props.vip ? "secondary" : "default"}
            size="small"
            label={props.name}
            icon={
              props.vip ? (
                <StarOutlined
                  style={{
                    width: "15px",
                    height: "15px",
                    color: "white",
                  }}
                />
              ) : undefined
            }
            style={{ color: props.vip ? "white" : theme.palette.text.primary }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Reply style={{ width: "15px", height: "15px" }} />
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            color={props.toVip ? "secondary" : "default"}
            size="small"
            label={props.toName}
            icon={
              props.toVip ? (
                <StarOutlined
                  style={{
                    width: "15px",
                    height: "15px",
                    color: "white",
                  }}
                />
              ) : undefined
            }
            style={{
              color: props.toVip ? "white" : theme.palette.text.primary,
            }}
          />
        </Grid>
        <Grid item>-</Grid>
        <Grid item>{props.message}</Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
