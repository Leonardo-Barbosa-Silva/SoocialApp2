import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";
import { store } from './store/index.js';
import usersReducers from './features/user/userSlice.js';



const usersReducersPersisted = persistReducer({ key: 'root', storage, version: 1 }, usersReducers)
const storeConfigured = store(usersReducersPersisted)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeConfigured}>
      <PersistGate loading={null} persistor={persistStore(storeConfigured)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
