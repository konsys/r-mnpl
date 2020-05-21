import { BoardDomain } from "./BoardDomain";
import { LINE_TRANSITION_TIMEOUT, CORNER_FIELDS } from "../utils/boardParams";
import { createTurnsArray, fieldPositions } from "../utils/fields.utils";
const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const moveTokenAfterDices = (currentToken: IToken) => {
  console.log(23424234, currentToken);

  let stopPosition = 0;
  if (currentToken && currentToken?.meanPosition !== stopPosition) {
    stopPosition = currentToken.meanPosition ? currentToken.meanPosition : 0;

    const usedFields = createTurnsArray(0, stopPosition);

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
  } else if (currentToken && stopPosition === 0) {
    setTimeout(() => {
      updateToken({
        ...currentToken,
        left: fields[0].left,
        top: fields[0].top,
        meanPosition: stopPosition,
      });
    });
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
  jailed: number;
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
