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
import userReducers from './features/user/userSlice.js';
import postReducers from './features/post/postSlice.js';



const userReducersPersisted = persistReducer({ key: 'root-user', storage, version: 1 }, userReducers)
const postReducersPersisted = persistReducer({ key: 'root-post', storage, version: 1 }, postReducers)
const storeConfigured = store(userReducersPersisted, postReducersPersisted)


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
