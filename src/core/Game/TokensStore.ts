import { createStore, createEvent, sample, is } from "effector";
import { dices, setDices, DiceStore } from "./DicesStore";

const tableSize = 665;
export interface TokenParams {
  userId: number;
  step: number;
  position: number;
  moves: TableMove[];
  isJailed: 0 | 1;
}

export interface TokenStore {
  [key: number]: TokenParams;
}

export interface TableMove {
  direction: "left" | "top";
  duration: number;
  top: number;
  currentPosition: number;
  left: number;
}
const init: TokenStore = {
  1: {
    userId: 1,
    step: 0,
    position: 0,
    moves: [
      {
        direction: "left",
        left: 35,
        top: 35,
        currentPosition: 0,
        duration: 0
      }
    ],
    isJailed: 0
  }
};

const diceTurn = sample(dices, setDices, v => v);

diceTurn.watch(async (v: DiceStore) => {
  const tokenState = tokens.getState();
  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, step, isJailed } = currentToken;

    const posSum = v.meanPosition + position;
    let endPosition = posSum >= 40 ? posSum - 40 : posSum;

    let moves: TableMove[] = [];
    const fieldDuration = 0.1;

    let startLine = 1;
    let stopLine = 1;
    if (position >= 11 && position <= 20) {
      startLine = 2;
    } else if (position >= 21 && position <= 30) {
      startLine = 3;
    } else if (position >= 31 && position <= 40) {
      startLine = 4;
    }

    if (endPosition >= 11 && endPosition <= 20) {
      stopLine = 2;
    } else if (endPosition >= 21 && endPosition <= 30) {
      stopLine = 3;
    } else if (endPosition >= 31 && endPosition <= 40) {
      stopLine = 4;
    }

    const lineEndFields = {
      1: 11,
      2: 21,
      3: 31,
      4: 41
    };

    let currentPosition = 0;

    for (let startFromLine = 1; startFromLine <= 4; startFromLine++) {
      for (
        let nextLine = startFromLine;
        nextLine <= startFromLine + 2;
        nextLine++
      ) {
        if (startLine !== startFromLine) {
          continue;
        }
        const direction =
          startFromLine === 1 || startFromLine === 3 ? "left" : "top";

        let top = 35;
        let left = 35;

        console.log("END", endPosition);
        // 1 line
        if (
          direction === "left" &&
          startFromLine === 1 &&
          endPosition < lineEndFields[1]
        ) {
          left = (endPosition - position + 1) * 55;
          top = 35;
          console.log(1, left, top, direction);
        } else if (direction === "left" && startFromLine === 1) {
          left = tableSize - 35;
          top = 35;
          console.log(1, left, top, direction);
        }

        // 2 line
        if (
          direction === "top" &&
          startFromLine === 2 &&
          endPosition < lineEndFields[2]
        ) {
          top = (endPosition - position) * 55;
          left = tableSize - 35;
          console.log(2, left, top, direction);
        } else if (direction === "left" && startFromLine === 2) {
          top = tableSize - 35;
          left = tableSize - 35;
          console.log(2, left, top, direction);
        }

        // 3 line
        if (
          direction === "left" &&
          startFromLine === 3 &&
          endPosition < lineEndFields[3]
        ) {
          left = (endPosition - position) * 55;
          top = tableSize - 35;
          console.log(3, left, top, direction);
        } else if (direction === "left" && startFromLine === 3) {
          left = tableSize - 35;
          top = tableSize - 35;
          console.log(3, left, top, direction);
        }

        // 4 line
        if (
          direction === "top" &&
          startFromLine === 4 &&
          endPosition < lineEndFields[4]
        ) {
          top = (endPosition - position) * 55;
          left = 35;
          console.log(4, left, top, direction);
        } else if (direction === "top" && startFromLine === 4) {
          top = tableSize - 35;
          left = 35;
          console.log(4, left, top, direction);
        }

        moves.push({
          direction,
          top,
          left,
          currentPosition,
          duration: (10 - position) * fieldDuration
        });

        if (stopLine === nextLine) {
          break;
        }
      }
    }

    console.log(123, moves);

    // if (startLine === 1 && stopLine === 1) {
    //   moves.push({
    //     direction: "left",
    //     top: 35,
    //     left: endPosition === 0 ? 35 : (endPosition + 1) * 55,
    //     duration: (10 - position) * fieldDuration
    //   });
    // }

    // // let startLine = 1;
    // if (position >= 0 && position <= 10) {
    //   // top = 35;
    //   // if (endPosition === 10) {
    //   //   left += 40;
    //   //   top -= 15;
    //   // }
    // }
    // if (position >= 11 && position <= 20) {
    //   startLine = 2;
    //   // if (endPosition === 20) {
    //   //   top += 22;
    //   //   left -= 5;
    //   // }
    //   moves.push({
    //     direction: "top",
    //     top: (endPosition - 9) * 55,
    //     left: tableSize - 35,
    //     duration: (20 - position) * fieldDuration
    //   });
    // }
    // if (position >= 21 && position <= 30) {
    //   startLine = 3;
    //   // if (endPosition === 30) {
    //   //   top -= 10;
    //   //   left += 5;
    //   // }
    //   moves.push({
    //     direction: "left",
    //     top: tableSize - 35,
    //     left: tableSize - (endPosition - 19) * 55,
    //     duration: (30 - position) * fieldDuration
    //   });
    // }
    // if (position >= 31 && position <= 40) {
    //   startLine = 4;
    //   moves.push({
    //     direction: "top",
    //     top: tableSize - (endPosition - 29) * 55,
    //     left: 35,
    //     duration: (40 - position) * fieldDuration
    //   });
    // }

    let res: TokenStore = {
      [v.userId]: {
        userId: v.userId,
        step: step + 1,
        position: endPosition,
        moves,
        isJailed
      }
    };

    setTimeout(() => changePosition(res), 1200);
  }
});

export const resetTokens = createEvent();

export const changePosition = createEvent<TokenStore>();

export const tokens = createStore(init)
  .on(changePosition, (_, v) => v)
  .reset(resetTokens);

// tokens.watch(v => console.log("TOKENS", v[1]));
// dices.watch(v => console.log("DICES", v));
