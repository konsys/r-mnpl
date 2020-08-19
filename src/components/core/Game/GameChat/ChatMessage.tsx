import { Chip, Grid, Typography } from "@material-ui/core";

import { IUser } from "../../../../types/types";
import React from "react";
import Reply from "@material-ui/icons/Reply";
import StarOutlined from "@material-ui/icons/StarOutlined";
import moment from "moment";
import { theme } from "../../../../theme";

export interface IChatMessage {
  fromUser: IUser;
  toUser?: IUser;
  message: string;
  time: Date;
}

export interface IChatMessageProps extends IChatMessage {
  setM: (message: string) => any;
}

export default function ChatMessage(props: IChatMessageProps) {
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
          <Typography variant="body2">
            <Reply
              onClick={() => props.setM(`#${props.toUser?.userId}, `)}
              style={{ width: "15px", height: "15px" }}
            />
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            color={props.fromUser.vip ? "secondary" : "default"}
            size="small"
            label={props.fromUser.name}
            icon={
              props.fromUser.vip ? (
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
              color: props.fromUser.vip ? "white" : theme.palette.text.primary,
            }}
          />
        </Grid>
        {props.toUser && (
          <Grid item>
            <Typography variant="body2">-</Typography>
          </Grid>
        )}
        {props.toUser && (
          <Grid item>
            <Chip
              color={props.toUser.vip ? "secondary" : "default"}
              size="small"
              label={props.toUser.name}
              icon={
                props.toUser.vip ? (
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
                color: props.toUser.vip ? "white" : theme.palette.text.primary,
              }}
            />
          </Grid>
        )}
        <Grid item>-</Grid>
        <Grid item>{props.message}</Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
