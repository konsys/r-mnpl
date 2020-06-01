import { BoardDomain } from "./BoardDomain";
import {
  LINE_TRANSITION_TIMEOUT,
  CORNER_FIELDS,
  FIELD_JAIL_LEFT,
  FIELD_JAIL_TOP,
  UNJAIL_FIELD,
} from "../utils/boardParams";
import { createTurnsArray, fieldPositions } from "../utils/fields.utils";
import { TokenStore, IToken, IPlayer } from "../types/BoardTypes";

const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const moveTokenAfterPlayerUpdate = (token: IToken, player: IPlayer) => {
  let stopPosition = player.meanPosition ? player.meanPosition : 0;
  if (
    player &&
    token.meanPosition !== player.meanPosition &&
    token.jailed === player.jailed
  ) {
    const usedFields = createTurnsArray(token.meanPosition, stopPosition);

    let lastIndex = 0;
    let timeout = LINE_TRANSITION_TIMEOUT;

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
  }
  // Go to jail or unjail
  else if (player && token.jailed !== player.jailed) {
    setTimeout(() => {
      updateToken({
        ...token,
        left: player.jailed ? FIELD_JAIL_LEFT : fields[UNJAIL_FIELD].left,
        top: player.jailed ? FIELD_JAIL_TOP : fields[UNJAIL_FIELD].top,
        meanPosition: stopPosition,
        jailed: player.jailed,
      });
    }, 0);
  }
};

const TokensDomain = BoardDomain.domain("PlayersDomain");
export const setTokensEvent = TokensDomain.event<TokenStore>();
export const resetTokensEvent = TokensDomain.event<TokenStore>();

export const tokensStore = TokensDomain.store<TokenStore>({
  tokens: [],
  version: 0,
})
  .on(setTokensEvent, (_, data) => data)
  .reset(resetTokens);

export const updateToken = (token: IToken) => {
  const tokens = tokensStore.getState().tokens;
  const index = tokens.findIndex((v) => v.userId === token.userId);
  index === -1 ? tokens.push(token) : (tokens[index] = token);
  updateAllTokens(tokens);
};

export const updateAllTokens = (tokens: IToken[]) => {
  setTokensEvent({
    version: ++tokensStore.getState().version,
    tokens,
  });
};

// tokensStore.watch((v) => console.log("tokensStorewatch", v));
