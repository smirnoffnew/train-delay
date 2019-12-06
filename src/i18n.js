import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    // Ceshia
    cs: {
      translations: {
        "delays.title": "Zpoždění",
        "delays.searchBar.station": "Zastávka",
        "delays.searchBar.date": "Datum",
        "delays.searchBar.arrivals": "Příjezdy",
        "delays.searchBar.departures": "Odjezdy",
        "delays.searchBar.button": "Ukázat spoje",
        "delays.list.connection": "Spoj",
        "delays.list.finalStation": "Cílová stanice",
        "delays.list.over": "Přes",
        "delays.list.arrival": "Příjezd",
        "delays.list.departure": "Odjezd",
        "delays.list.platform": "Nástupiště",
        "delays.list.delay": "Zpoždění",
        "delays.list.noDelay": "Nemá zpoždění",
        "delays.mobile.list.finalStation": "Cíl/Spoj",
        "delays.mobile.list.arrival.departure": "Příjezd/Odjezd",
        "delays.mobile.list.delay.platform": "Zpoždění/Nástup",
      }
    },

    //Slovak
    sk: {
      translations: {
        "delays.title": "Zpoždění",
        "delays.searchBar.station": "Zastávka",
        "delays.searchBar.date": "Datum",
        "delays.searchBar.arrivals": "Příjezdy",
        "delays.searchBar.departures": "Odjezdy",
        "delays.searchBar.button": "Ukázat spoje",
        "delays.list.connection": "Spoj",
        "delays.list.finalStation": "Cílová stanice",
        "delays.list.over": "Přes",
        "delays.list.arrival": "Příjezd",
        "delays.list.departure": "Odjezd",
        "delays.list.platform": "Nástupiště",
        "delays.list.delay": "Zpoždění",
        "delays.list.noDelay": "Nemá zpoždění",
        "delays.mobile.list.finalStation": "Cíl/Spoj",
        "delays.mobile.list.arrival.departure": "Příjezd/Odjezd",
        "delays.mobile.list.delay.platform": "Zpoždění/Nástup",
      }
    },

    //English
    en: {
      translations: {
        "delays.title": "Delays",
        "delays.searchBar.station": "Station",
        "delays.searchBar.date": "Date",
        "delays.searchBar.arrivals": "Arrivals",
        "delays.searchBar.departures": "Departures",
        "delays.searchBar.button": "Display connections",
        "delays.list.connection": "Connection",
        "delays.list.finalStation": "Final Station",
        "delays.list.over": "Over",
        "delays.list.arrival": "Arrival",
        "delays.list.departure": "Departure",
        "delays.list.platform": "Platform",
        "delays.list.delay": "Delay",
        "delays.list.noDelay": "On time",
        "delays.mobile.list.finalStation": "Final Station",
        "delays.mobile.list.arrival.departure": "Arrival/Departure",
        "delays.mobile.list.delay.platform": "Delay/Platform",
      }
    },

    //Ukrainian
    ua: {
      translations: {
        "delays.title": "Затримки",
        "delays.searchBar.station": "Станція",
        "delays.searchBar.date": "Дата",
        "delays.searchBar.arrivals": "Прибуття",
        "delays.searchBar.departures": "Відправлення",
        "delays.searchBar.button": "Відображення сполучень",
        "delays.list.connection": "Сполучення",
        "delays.list.finalStation": "Кінцева станція",
        "delays.list.over": "Маршрут",
        "delays.list.arrival": "Прибуття",
        "delays.list.departure": "Відправлення",
        "delays.list.platform": "Платформа",
        "delays.list.delay": "Затримка",
        "delays.list.noDelay": "Вчасно",
        "delays.mobile.list.finalStation": "Кінцева станція",
        "delays.mobile.list.arrival.departure": "Прибуття/Відправлення",
        "delays.mobile.list.delay.platform": "Затримка/Платформа",
      }
    },

    //German
    de: {
      translations: {
      }
    },

    //Polish
    pl: {
      translations: {
      }
    },

    //Hungarian
    hu: {
      translations: {
        
      }
    },

    //Russian
    ru: {
      translations: {
        "delays.title": "Задержки",
        "delays.searchBar.station": "Станция",
        "delays.searchBar.date": "Дата",
        "delays.searchBar.arrivals": "Прибытие",
        "delays.searchBar.departures": "Отправление",
        "delays.searchBar.button": "Отобразить соединения",
        "delays.list.connection": "Соединения",
        "delays.list.finalStation": "Конечная станция",
        "delays.list.over": "Маршрут",
        "delays.list.arrival": "Прибытие",
        "delays.list.departure": "Отправление",
        "delays.list.platform": "Платформа",
        "delays.list.delay": "Задержка",
        "delays.list.noDelay": "Вовремя",
        "delays.mobile.list.finalStation": "Конечная станция",
        "delays.mobile.list.arrival.departure": "Прибытие/Отправление",
        "delays.mobile.list.delay.platform": "Задержка/Платформа",
      }
    },

    //French
    fr: {
      translations: {
      }
    },

    //Spanish
    es: {
      translations: {
        
      }
    }
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
