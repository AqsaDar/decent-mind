import { GET_TRANSLATIONS } from "../../constants/ApiUrls";
import { getMethod } from "../../services/NetworkManager";
import {
  //   getLocalStorage,
  setTranslationStorage,
} from "../utils/TranslationManagement";

export const translationData = async (type = "en") => {
  // if (getLocalStorage("translationsData") == null) {
  let tranlationData = await getMethod(GET_TRANSLATIONS + "/" + type);
  setTranslationStorage(tranlationData?.data.data);
  return tranlationData;
  //   }
};
