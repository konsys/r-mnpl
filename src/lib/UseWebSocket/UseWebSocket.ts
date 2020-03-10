import { useEffect, useRef, useCallback } from "react";

import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

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
  onMessage: (msg: any) => void,
  onError?: (msg: string) => void
) => {
  const socketRef: any = useRef();

  const status = useStore(wsStatus);

  const handleError = (err: any) => {
    error();
    onError && onError(err.message);
  };

  useEffect(() => {
    const socket = new WebSocket(wsURL);
    socketRef.current = socket;
    socketRef.current.onopen = open;
    socketRef.current.onclose = closed;
    socketRef.current.onerror = handleError;
    socketRef.current.onmessage = (msg: any) => onMessage(msg);
    return () => {
      socketRef.current.onopen = null;
      socketRef.current.onclose = null;
      socketRef.current.onmessage = null;
    };
  }, [wsURL, onMessage]);

  const sendMessage = useCallback(
    message => {
      socketRef.current.send(JSON.stringify(message));
    },
    [socketRef]
  );
  return [status, sendMessage];
};
