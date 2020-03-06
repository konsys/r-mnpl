import React from "react";
import { useStore } from "effector-react";
import { tokens } from "../../core/Game/TokensStore";

interface Props {
  id: number;
}

export const Token = (props: Props) => {
  const tokenStore = useStore(tokens);

  const token = tokenStore[props.id];
  return (
    <>
      {token && (
        <div
          mnpl-jailed={token.isJailed}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`
          }}
          className="_animated"
        />
      )}
    </>
  );
};

// for i in {1..10000}; do
// curl 'https://all.me/api/v2/magazines/5cda7a4085a52b00011ec3d5/subscription' -H 'authority: all.me' -H 'pragma: no-cache' -H 'cache-control: no-cache' -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgwODBjZjM4MTk2ODAwMDFiM2EzMDIiLCJpYXQiOjE1Nzk4NTUyMzQsImV4cCI6NDE3MTg1NTIzNCwiYXVkIjoiMSJ9.fGIu7IAKsVD_FB9b3gdNR_1yGz9gufG96XVV8IlOJjs' -H 'sec-fetch-dest: empty' -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36' -H 'dnt: 1' -H 'content-type: application/json' -H 'accept: */*' -H 'origin: https://all.me' -H 'sec-fetch-site: same-origin' -H 'sec-fetch-mode: cors' -H 'referer: https://all.me/id410579' -H 'accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6' -H 'cookie: _ga=GA1.2.1306285492.1579855228; _ym_uid=1579855228883828240; _ym_d=1579855228; G_ENABLED_IDPS=google; _gid=GA1.2.1126818679.1583488453; uid=5d8080cf3819680001b3a302; psid=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgwODBjZjM4MTk2ODAwMDFiM2EzMDIiLCJpYXQiOjE1ODM0ODg0NTMsImV4cCI6NDE3NTQ4ODQ1MywiYXVkIjoiMSJ9.7OI93d2JqZxE-485159FFURrOAjE6hSdrEeq67ywn9I.65Jxaqdl8o2l%2F7wY8EUZdx%2FO%2B8po3LXgIHAkQHE5%2FD4; _ym_visorc_47673058=w; _ym_isad=1; G_AUTHUSER_H=0; _gat=1' --data-binary '{}' --compressed
// done
