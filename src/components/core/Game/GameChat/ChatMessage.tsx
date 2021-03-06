import { Chip, Grid, Typography } from "@material-ui/core";

import { IUser } from "types/types";
import React from "react";
import Reply from "@material-ui/icons/Reply";
import StarOutlined from "@material-ui/icons/StarOutlined";
import { addReplyToChatMessage } from "stores/Game/Chat/GameChatModel";
import moment from "moment";
import { theme } from "theme";
import { useStore } from "effector-react";
import { user$ } from "stores/Game/User/UserModel";

export interface IChatMessage {
  fromUser: IUser;
  replies?: IUser[];
  message: string;
  time: Date;
}

export interface IChatMessageProps extends IChatMessage {}

export default function ChatMessage(props: IChatMessageProps) {
  const user = useStore(user$);
  return (
    <>
      <Grid
        container
        alignContent="space-between"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item className={"_chat-time"}>
          {moment(props.time).format("HH:mm").toString()}
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Reply
              onClick={() => {
                addReplyToChatMessage(props.fromUser);
              }}
              style={{ width: "15px", height: "15px", cursor: "pointer" }}
            />
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            variant="outlined"
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
        {props.replies && props.replies.length ? (
          <Grid item>
            <Typography variant="body2" className={"_reply-sign"}>
              -
            </Typography>
          </Grid>
        ) : (
          ""
        )}
        {props.replies && (
          <Grid item>
            <Grid container spacing={1}>
              {props.replies.map((v, k) => (
                <Grid item key={k}>
                  <Chip
                    className="_reply-message"
                    variant={
                      !!user && v.userId === user.userId
                        ? "default"
                        : "outlined"
                    }
                    color={
                      v.vip
                        ? "secondary"
                        : v.userId === (user && user.userId)
                        ? "primary"
                        : "default"
                    }
                    size="small"
                    label={v.name}
                    icon={
                      v.vip ? (
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
                      color: v.vip
                        ? "white"
                        : v.userId !== (user && user.userId)
                        ? theme.palette.text.primary
                        : "white",
                    }}
                  />
                  ,
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        <Grid item>-</Grid>
        <Grid item className={"_chat-message"}>
          {props.message}
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
