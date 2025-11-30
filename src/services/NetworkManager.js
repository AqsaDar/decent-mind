import axios from "axios";
import { BASE_URL } from "../constants/ApiUrls";
export const content_type = () => {
  return "application/json";
};
// export const api_version = () => {
//   return "3";
// };
const hookRequestInterceptorsWithAxiosInstance = (instance) => {
  return instance.interceptors.request.use(
    // Any status code that lie within the range of 2xx cause this function to trigger

    (config) => {
      return config;
    }
  );
};

const hookResponseInterceptorsWithAxiosInstance = (instance) =>
  instance.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger

    (response) => {
      return response;
    },

    // Any status codes that falls outside the range of 2xx cause this function to trigger

    (error) => {
      return Promise.reject(error);
    }
  );
function getAxios(tokenizeInstance, accessToken = null) {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  // Hooking a request interceptor

  hookRequestInterceptorsWithAxiosInstance(instance);

  // Hooking a response interceptor

  hookResponseInterceptorsWithAxiosInstance(instance);

  //   if (tokenizeInstance) {
  //     instance.defaults.headers = {
  //       "Content-Type": content_type(),
  //       Authorization: auth_token(),
  //       "x-api-version": api_version(),
  //       // "Content-Type": "application/json",
  //       // Authorization: `Bearer ${bearer}`,
  //       // "x-api-version": 3,
  //     };
  // }
  instance.defaults.headers = {
    "Content-Type": content_type(),
    //   Authorization: auth_token(),
    //   "x-api-version": api_version(),
    // "Content-Type": "application/json",
    // Authorization: `Bearer ${bearer}`,
    // "x-api-version": 3,
  };

  return instance;
}

axios.defaults.timeout = 300000;

export async function getMethod(type) {
  try {
    return await getAxios(true).get(type);
  } catch (error) {
    return error.response;
  }
}
export async function postMethod(type, data) {
  try {
    return await getAxios(true).post(type, data);
  } catch (error) {
    return error.response;
  }
}
