import {
  CORNER_FIELDS,
  FIELD_JAIL_LEFT,
  FIELD_JAIL_TOP,
  LINE_TRANSITION_TIMEOUT,
} from "../../utils/boardParams";
import { IPlayer, IToken, TokenStore } from "../../types/types";
import { createTurnsArray, fieldPositions } from "../../utils/fields.utils";

import { BoardDomain } from "./BoardDomain";

const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const tokenTransition = (token: IToken, player: IPlayer) => {
  let stopPosition = player.meanPosition ? player.meanPosition : 0;
  const usedFields = createTurnsArray(token.meanPosition, stopPosition);

  let lastIndex = 0;
  let timeout = LINE_TRANSITION_TIMEOUT;

  if (usedFields.length && !player.jailed) {
    for (let field of usedFields) {
      if (
        CORNER_FIELDS.indexOf(field) > -1 ||
        lastIndex === usedFields.length - 1
      ) {
        setTimeout(() => {
          updateToken({
            ...token,
            left: fields[field].left,
            top: fields[field].top,
            meanPosition: stopPosition,
          });
        }, timeout);
        timeout += LINE_TRANSITION_TIMEOUT;
      }
      lastIndex++;
    }
  } else {
    setTimeout(
      () => {
        updateToken({
          ...token,
          left: player.jailed
            ? FIELD_JAIL_LEFT
            : fields[player.meanPosition].left,
          top: player.jailed ? FIELD_JAIL_TOP : fields[player.meanPosition].top,
          meanPosition: stopPosition,
        });
      },
      player.jailed ? 0 : LINE_TRANSITION_TIMEOUT
    );
  }
};

const TokensDomain = BoardDomain.domain("PlayersDomain");
export const setTokensEvent = TokensDomain.event<TokenStore>();
export const resetTokensEvent = TokensDomain.event<TokenStore>();

export const tokens$ = TokensDomain.store<TokenStore>({
  tokens: [],
  version: 0,
})
  .on(setTokensEvent, (_, data) => data)
  .reset(resetTokens);

export const updateToken = (token: IToken) => {
  const tokens = tokens$.getState().tokens;
  const index = tokens.findIndex((v) => v.userId === token.userId);
  index === -1 ? tokens.push(token) : (tokens[index] = token);
  updateAllTokens(tokens);
};

export const updateAllTokens = (tokens: IToken[]) => {
  setTokensEvent({
    version: ++tokens$.getState().version,
    tokens,
  });
};

// tokens$.watch((v) => console.log("tokensStorewatch", v));
