import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      ru: {
        translations: {
          Chat: "Чат",
          "Type message and press Enter": "Введите сообщение и нажмите Enter",
          "now online": "сейчас онлайн",
          "Waiting for games": "Ожидают игр",
          "Create game": "Создать игру",
          "Show bots messages": "Показывать сообщения ботов",
          Friends: "Друзья",
          "Friends online": "Друзья онлайн",
          "No friends online": "Нет друзей онлайн",
          "Search games": "Поиск игр",
          "Top Five": "Лучшие игроки",
          "Create room": "Создать комнату",
          "Regular game": "Обычная игра",
          "Quick game": "Быстрая игра",
          "GMS Shuffle": "Перетасовка",
          Retro: "Ретро",
          "Russian roulette": "Русская рулетка",
          Cancel: "Отмена",
          Inventory: "Инвентарь",
          M1TV: "M1TV",
          Login: "Войти",
          Market: "Маркет",
          "Find games": "Поиск игр",
          "Page not found": "Страница не найдена",
          "To main page": "На главную",
          "This page doesn`t exist yet": "Вы попали на несуществующую страницу",
          "Week top": "Топ недели",
          More: "Подробнее",
          "You are not in Top Five":
            "Вы не входите в топ игроков недели — сначала выиграйте матч на четыре или пять игроков.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// for ((i=1;i<=10000;i++)); do curl 'https://monopoly-one.com/api/gchat.send' \
//   -H 'authority: monopoly-one.com' \
//   -H 'pragma: no-cache' \
//   -H 'cache-control: no-cache' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
//   -H 'dnt: 1' \
//   -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
//   -H 'accept: */*' \
//   -H 'origin: https://monopoly-one.com' \
//   -H 'sec-fetch-site: same-origin' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6' \
//   -H 'cookie: __cfduid=d63dbd5af63595aee574d582df1ab015e1596633993; _ga=GA1.2.715472772.1596634069; strg_device_token=6c352bf90a95a9e7; _gid=GA1.2.519667226.1597325512' \
//   --data-raw 'message=DG4444TEET&access_token=3b79aabcbc9e7dacb9167c8c436e4a22347395f75e94a45d413e818d8addb227cd8ee317ae7230b8c074e455aed354f26ee955734d74c2585b7cbe0a555dc641&sct=1594054142807' \
//   --compressed; done
