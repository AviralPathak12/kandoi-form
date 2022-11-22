import {store} from '../store/index';

export const getAdminToken = () => {
   const data = store.getState();
   return data.admin.token;
}

export const getClientToken = () => {
   const data = store.getState();
   return data.client.token;
}

