import { CONTACT_US } from "../constants/ApiUrls";
import { getMethod, postMethod } from "./NetworkManager";

export const contactUs = async (obj) => {
  return postMethod(CONTACT_US, obj);
};
