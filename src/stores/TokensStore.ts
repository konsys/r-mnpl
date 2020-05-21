import { BoardDomain } from "./BoardDomain";
import { LINE_TRANSITION_TIMEOUT, CORNER_FIELDS } from "../utils/boardParams";
import { createTurnsArray, fieldPositions } from "../utils/fields.utils";
import { getPlayerById } from "../utils/players.utils";
const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const moveTokenAfterDices = (currentToken: IToken) => {
  const player = getPlayerById(currentToken.userId);

  let stopPosition = player?.meanPosition ? player.meanPosition : 0;

  if (player && currentToken.meanPosition !== player.meanPosition) {
    console.log(23424234, player.meanPosition);
    const usedFields = createTurnsArray(
      currentToken.meanPosition,
      stopPosition
    );

    let lastIndex = 0;
    let timeout = LINE_TRANSITION_TIMEOUT;

    for (let field of usedFields) {
      if (
        CORNER_FIELDS.indexOf(field) > -1 ||
        lastIndex === usedFields.length - 1
      ) {
        setTimeout(() => {
          updateToken({
            ...currentToken,
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
};

interface ITokenStore {
  version: number;
  tokens: IToken[];
}
interface IToken {
  meanPosition: number;
  left: number;
  top: number;
  userId: number;
}

const TokensDomain = BoardDomain.domain("PlayersDomain");
export const setTokensEvent = TokensDomain.event<ITokenStore>();
export const resetTokensEvent = TokensDomain.event<ITokenStore>();

export const tokensStore = TokensDomain.store<ITokenStore>({
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
