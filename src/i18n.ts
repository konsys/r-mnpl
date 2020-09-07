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
          Error: "Ошибка",
          "Only for VIP": "Только для VIP статуса",
          "Enter room": "Присоединиться",
          "Unknown error": "Неизвестная ошибка",
          "Oops!": "Упс!",
          "Room doesn`t exist": "Комната уже не существует",
          "Max players reached": "Максимальное количество игроков",
          Chat: "Чат",
          "Type message and press Enter": "Введите сообщение и нажмите Enter",
          "Special rules for quick games. The third dice and quick timers and other interesting things.":
            "Тут действуют особые правила, ускоряющие классические матчи, например, невероятный третий кубик с бонусами и триплами, а также сокращённые таймеры.",
          "now online": "сейчас онлайн",
          "For more inforamtion about quick game read here":
            "Если вам интересно разобраться в правилах быстрой игры, прочитайте пост в нашем блоге.",
          "Waiting for games": "Ожидают игры",
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
          "With restarts": "С рестартами",
          "you play with random cards adn dices;":
            "вы играете со случайными карточками и кубиками;",
          "if you win three matches you get this thing;":
            "выиграв три матча подряд, вы получаете один из этих предметов;",
          "if you loose you have to start from the beginning.":
            "в случае поражения в матче вам придётся начинать турнир сначала.",
          "We start game with rules from 2015!":
            "Запускаем ностальгию! Играйте на поле и по правилам, которые действовали летом 2015.",
          "More about this game":
            "Подробнее о правилах этого режима можно прочитать здесь.",

          Players: "Игроки",
          "Room settings": "Настройки комнаты",
          "Private room": "Приватная комната",
          "Game autostart": "Автостарт игры",
          "With portal": "С порталом",
          Retro: "Ретро",
          Roulette: "Рулетка",
          Portal: "Портал",
          "Room type": "Тип комнаты",
          "Empty field": "Пустое поле",
          "Russian roulette": "Русская рулетка",
          Cancel: "Отмена",
          Inventory: "Инвентарь",
          M1TV: "M1TV",
          Login: "Войти",
          Market: "Маркет",
          "Find games": "Поиск игр",
          "No cards but you play russian roulette!":
            "Тут нет полей, тут нечего покупать и продавать. Но всегда можно (и нужно!) играть в рулетку!",
          "Page not found": "Страница не найдена",
          "To main page": "На главную",
          "This page doesn`t exist yet": "Вы попали на несуществующую страницу",
          "Week top": "Топ недели",
          "Usual rating match.": "Обычный рейтинговый матч.",
          "Fird dice and other rules for quick match.":
            "Третий кубик и дополнительные правила, ускоряющие матч.",
          "Tournament for playing with different cards.":
            "Турнир, где вы играете со случайными картами.",
          "Rules for classic monopoly":
            "Играйте на поле и по правилам из лета 2015.",
          "Go and shoot. Nothing more.":
            "Катайтесь по полям и стреляйте. Ничего более.",
          More: "Подробнее",
          "You are not in Top Five":
            "Вы не входите в топ игроков недели — сначала выиграйте матч на четыре или пять игроков.",

          "Room already exists": "Вы уже ожидаете игру",
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
