export const getKeyTranslation = (key) => {
  var translations = JSON.parse(localStorage.getItem("translationsData"));
  var finalKey = "";
  translations.map((a) => {
    if (a.identifier == key) {
      finalKey = a.title;
    }
  });
  return finalKey;
};
