import axios from "axios";

const defaultTimeout = 40000;
const noAuthCheckUrls = [
  "v1/login/",
  "v1/register/",
  "v1/request-reset-email/",
  "/v1/password-reset-complete/",
  "v1/email_verify/",
  "/v1/cosigner/application-summary/",
  "/v1/cosigner/curp_registration/",
  "/v1/cosigner/additional_info/",
  "/v1/cosigner/final_info/",
  "/v1/identify_cosigner_unboarding_steps/",
];

const isNoAuth = (url) => {
  const refRegex = new RegExp(/\/v1\/check_reference_code\/\?code=([^&]*)/g);
  const refRegex2 = new RegExp(/\/v1\/reset-password\/([^&]*)/g);
  return refRegex.test(url) || refRegex2.test(url);
};

// const handleRequest = (config) => {
//   if (noAuthCheckUrls.indexOf(config?.url) < 0 && !isNoAuth(config?.url)) {
//     return {
//       ...config,
//       headers: {
//         ...config.headers,
//         Authorization: `Bearer ${getAccessToken()}`,
//       },
//     };
//   } else {
//     return config;
//   }
// };

const createApiInstance = (baseURL) => {
  const api = axios.create({ baseURL, timeout: defaultTimeout });

  // api.interceptors.request.use(handleRequest);
  api.interceptors.response.use((response) => {
    return response;
  });

  return {
    instance: api,
  };
};

export default createApiInstance;
