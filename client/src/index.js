import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/AppRouter'
import { Provider } from "react-redux";
import { store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';







// import './styles.scss';

// ReactDOM.render(<AppRouter />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store);


root.render(
  <React.StrictMode>
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <AppRouter />
    </PersistGate>
    </Provider>

  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


