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
        "delays.title": "Verzögerungen",
        "delays.searchBar.station": "Bahnhof",
        "delays.searchBar.date": "Datum",
        "delays.searchBar.arrivals": "Ankünfte",
        "delays.searchBar.departures": "Abflüge",
        "delays.searchBar.button": "Verbindungen anzeigen",
        "delays.list.connection": "Verbindung",
        "delays.list.finalStation": "Endstation",
        "delays.list.over": "Über",
        "delays.list.arrival": "Ankunft",
        "delays.list.departure": "Abfahrt",
        "delays.list.platform": "Plattform",
        "delays.list.delay": "Verzögern",
        "delays.list.noDelay": "Pünktlich",
        "delays.mobile.list.finalStation": "Endstation",
        "delays.mobile.list.arrival.departure": "Ankunft/Abfahrt",
        "delays.mobile.list.delay.platform": "Verzögern/Plattform",
      }
    },

    //Polish
    pl: {
      translations: {
        "delays.title": "Opóźnienia",
        "delays.searchBar.station": "Stacja",
        "delays.searchBar.date": "Data",
        "delays.searchBar.arrivals": "Przylot",
        "delays.searchBar.departures": "Wylot",
        "delays.searchBar.button": "Wyświetlanie połączeń",
        "delays.list.connection": "Połączenie",
        "delays.list.finalStation": "Stacja końcowa",
        "delays.list.over": "Trasa",
        "delays.list.arrival": "Przylot",
        "delays.list.departure": "Wylot",
        "delays.list.platform": "Platforma",
        "delays.list.delay": "Opóźnienie",
        "delays.list.noDelay": "Z czasem",
        "delays.mobile.list.finalStation": "Stacja końcowa",
        "delays.mobile.list.arrival.departure": "Przylot/Wylot",
        "delays.mobile.list.delay.platform": "Opóźnienie/Platforma",
      }
    },

    //Hungarian
    hu: {
      translations: {
        "delays.title": "Késés",
        "delays.searchBar.station": "állomás",
        "delays.searchBar.date": "dátum",
        "delays.searchBar.arrivals": "érkezés",
        "delays.searchBar.departures": "Indulás",
        "delays.searchBar.button": "Mutassa a kapcsolatokat",
        "delays.list.connection": "kapcsolatok",
        "delays.list.finalStation": "Végállomás",
        "delays.list.over": "Felett",
        "delays.list.arrival": "érkezés",
        "delays.list.departure": "Indulás",
        "delays.list.platform": "emelvény",
        "delays.list.delay": "késés",
        "delays.list.noDelay": "Időben",
        "delays.mobile.list.finalStation": "Végállomás",
        "delays.mobile.list.arrival.departure": "érkezés/Indulás",
        "delays.mobile.list.delay.platform": "késés/emelvény",
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
        "delays.title": "Retards",
        "delays.searchBar.station": "Station",
        "delays.searchBar.date": "La date",
        "delays.searchBar.arrivals": "Arrivées",
        "delays.searchBar.departures": "départs",
        "delays.searchBar.button": "Afficher les connexions",
        "delays.list.connection": "Connexion",
        "delays.list.finalStation": "Station finale",
        "delays.list.over": "Sur",
        "delays.list.arrival": "Arrivée",
        "delays.list.departure": "Départ",
        "delays.list.platform": "Plate-forme",
        "delays.list.delay": "Retard",
        "delays.list.noDelay": "À temps",
        "delays.mobile.list.finalStation": "Station finale",
        "delays.mobile.list.arrival.departure": "Arrivée/Départ",
        "delays.mobile.list.delay.platform": "Retard/Plate-forme",
      }
    },

    //Spanish
    es: {
      translations: {
        "delays.title": "Retrasos",
        "delays.searchBar.station": "Estación",
        "delays.searchBar.date": "Fecha",
        "delays.searchBar.arrivals": "Llegadas",
        "delays.searchBar.departures": "Salidas",
        "delays.searchBar.button": "Mostrar conexiones",
        "delays.list.connection": "Conexión",
        "delays.list.finalStation": "Estación final",
        "delays.list.over": "Encima",
        "delays.list.arrival": "Llegada",
        "delays.list.departure": "Salida",
        "delays.list.platform": "Plataforma",
        "delays.list.delay": "Retrasar",
        "delays.list.noDelay": "A tiempo",
        "delays.mobile.list.finalStation": "Estación final",
        "delays.mobile.list.arrival.departure": "Llegada/Salida",
        "delays.mobile.list.delay.platform": "Retrasar/Plataforma",
      }
    }
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  lng: "en", // added to avoid warning in console
  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
