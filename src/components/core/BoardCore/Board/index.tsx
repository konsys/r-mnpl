import { Redirect, RouteComponentProps } from "react-router";
import { board$, boardGate } from "../../../../stores/Game/Board/BoardModel";
import { useGate, useStore } from "effector-react";

import { BoardWrapper } from "./BoardWrapper";
import { ModalDialog } from "../../../views/BoardViews/ModalDialog/ModalDialog";
import React from "react";
import { RoomStatus } from "stores/Game/Rooms/RoomsModel";

export const Board = (props: RouteComponentProps | any) => {
  useGate(boardGate, { gameId: props.match.params.id });
  const room = useStore(board$);

  const playerIds =
    room && room.room && Array.isArray(room.room.players)
      ? room.room.players.map((v) => v?.userId || 0)
      : [];

  console.log(33333, room);
  return (
    <>
      {room && room.room.roomStatus === RoomStatus.COMPLETED && (
        <Redirect
          to={{
            pathname: `/games`,
          }}
        />
      )}

      <ModalDialog />
      {playerIds.length && <BoardWrapper playerIds={playerIds} />}
    </>
  );
};
