import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
i18next
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./${language}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    lng: "ru",
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
