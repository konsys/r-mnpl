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
          "Fields not found": "Поле не найдено",
          "Wrong room id": "Комната не найдена",
          "Wrong login or password": "Неправильный логин или пароль",
          "User already exists": "Логин занят",
          "Registration copde is wrong": "Неправильный регистрационный код",
          "Registration code could not be sent": "Код не может быть послан",

          "Registration code from the letter we sent on your email":
            "Вставьте код, который был отправлен на Ваш почтовый ящик",
          "Registration Code": "Код из письма",
          Register: "зарегистрироваться",
          Name: "Имя",
          "Repeat password": "Повторите пароль",
          Registration: "Регистрация",
          "Create your Monopoly account": "Создайте аккаунт в Монополии",
          Email: "Электронная почта",
          "Wrong email or password": "Неправильный пароль или логин",
          "Register without VK": "Зарегистрироваться без Вконтакте",
          Password: "Пароль",
          Enter: "Войти",
          "Forgot password": "Забыли пароль",
          "VK login": "Войти через Вконтакте",
          "If you enter the first time, the new Monopoly account will be create":
            "Если Вы входите через Вконтакт в превый раз, новый аккаунт будет создан",
          "By fact of authorization you agree with":
            "Фактом авторизации, Вы соглашаетесь с",
          "Site rules": "Правилами сайта",
          here: "здесь",
          Autorization: "Авторизация",
          "Autorization with you login and password from Monopoly":
            "Авторизуйтесь при помощи логина и пароля от вашего аккаунта на Monopoly.",
          "Input words for items search": "Введите слова для поиска предметов",
          "All items": "Все предметы",
          Cards: "Карточки",
          "Cases and sets": "Кейсы и наборы",
          "Dices and generators": "Кубики и генераторы",
          Badges: "Значки",
          Stickers: "Стикеры",
          Others: "Остальное",
          "Login to play": "Войдите, чтобы присоединиться к игре",
          "You are not logged in": "Мы не знаем, кто Вы",
          Ok: "Ok",
          Reconnect: "Подключиться",
          "You can`t join the room": "Вы не можете присоединиться к игре",
          "You are already waiting for game": "Вы уже ожидаете игру",
          "Open VIP status for all available options":
            "Откройте VIP статус чтобы выбрать все возможные опции",
          Error: "Ошибка",
          "Login to create room": "Войдите, чтобы создать комнату",
          "Login to manage your inventory":
            "Войдите, чтобы управлять Вашим инвентарем",
          "Only for VIP": "Только для VIP статуса",
          "Enter room": "Присоединиться",
          "Waiting...": "Ждем...",
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
          "No cards but you play russian roulette!":
            "Тут нет полей, тут нечего покупать и продавать. Но всегда можно (и нужно!) играть в рулетку!",
          "Page not found": "Страница не найдена",
          "Main page": "На главную",
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
          "Exchange offers": "Предложения обмена",
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
//   --data-raw 'message=DG4444TEET&accessToken=3b79aabcbc9e7dacb9167c8c436e4a22347395f75e94a45d413e818d8addb227cd8ee317ae7230b8c074e455aed354f26ee955734d74c2585b7cbe0a555dc641&sct=1594054142807' \
//   --compressed; done
