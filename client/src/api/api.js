import createApiInstance from "./createApiInstance";

export const endPoint = "http://localhost:80";

const api = createApiInstance(endPoint);

export default api.instance;
