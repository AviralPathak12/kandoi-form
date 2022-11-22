import api from "../api";
import clientUrl from "./config";

const clientApi = {
  async clientSignIn(data) {
    return api.post(clientUrl.clientSignIn, data);
  },
  async createProfile(data) {
    return api.post(clientUrl.createProfile, data);
  },
  async otpVerify(data) {
    return api.post(clientUrl.otpVerify, data);
  }
};

export default clientApi;
