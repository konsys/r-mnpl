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
          Friends: "Друзья",
          "Friends online": "Друзья онлайн",
          "No friends online": "Нет друзей онлайн",
          "Search games": "Поиск игр",
          "Top Five": "Лучшие игроки",
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
