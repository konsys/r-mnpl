import { useEffect, useRef, useCallback } from "react";

import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import io from "socket.io-client";

const open = createEvent("open");
const closed = createEvent("closed");
const error = createEvent("error");

const wsStatus = createStore("closed")
  .on(open, () => "open")
  .on(closed, () => "closed")
  .on(error, () => "error");

wsStatus.watch(state => console.log("ws", state));

/**
 * @param wsURL {String}
 * @param onMessage {function}
 * @param onError {function}
 * @returns {[Object, function]}
 */
export const useWebSocket = (
  wsURL: string,
  onMessage?: (msg: any) => void,
  onError?: (msg: string) => void
) => {
  const socketRef: any = useRef();

  const status = useStore(wsStatus);

  const handleError = (err: any) => {
    error();
    onError && onError(err.message);
  };

  useEffect(() => {
    const socket = io.connect(wsURL);
    console.log(2222, socket.connected);
    socketRef.current = socket;
    socketRef.current.connect = open;
    socketRef.current.disconnect = closed;
    socketRef.current.onerror = handleError;
    socketRef.current.event = onMessage ? (msg: any) => onMessage(msg) : null;
    return () => {
      socketRef.current.onopen = null;
      socketRef.current.onclose = null;
      socketRef.current.onmessage = null;
    };
  }, []);

  // const sendMessage = useCallback(
  //   message => {
  //     socketRef.current.send(JSON.stringify(message));
  //   },
  //   [socketRef]
  // );

  const sendMessage = (message: any) => {
    console.log(333, message);
  };
  return [status, () => sendMessage];
};
