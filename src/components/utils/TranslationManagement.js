export const setTranslationStorage = (data) => {
  localStorage.setItem("translationsData", JSON.stringify(data));
};
