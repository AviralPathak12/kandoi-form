import api from "../api";
import adminUrl from "./config";

const adminApi = {
  async adminSignIn(data) {
    return api.post(adminUrl.adminSignIn, data);
  },
  async profileList() {
    return api.get(adminUrl.profileList);
  },
  async approveProfile(data) {
    return api.patch(`${adminUrl.approveProfile}${data}`);
  },
  async deleteProfile(data) {
    return api.delete(`${adminUrl.deleteProfile}${data}`);
  },
  async showProfile(data) {
    return api.get(`${adminUrl.showProfile}${data}`);
  },
  async updateProfile(id,data) {
    return api.patch(`${adminUrl.updateProfile}${id}`,data);
  },
  async approvedProfileList(data) {
    return api.get(adminUrl.approvedProfileList);
  },
  async createNews(data) {
    return api.post(adminUrl.createNews, data);
  },
  async listNews(data) {
    return api.get(adminUrl.listNews, data);
  },
  async deleteNews(data) {
    return api.delete(`${adminUrl.deleteNews}${data}`);
  },
  async showNews(data) {
    return api.get(`${adminUrl.showNews}${data}`);
  },
};

export default adminApi;
