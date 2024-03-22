import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';


export const store = (userReducersPersisted, postReducersPersisted) => (
    configureStore(
        {
            reducer: {
                users: userReducersPersisted,
                posts: postReducersPersisted
            },
            middleware: (getDefaultMiddleware) => (
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoreActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
                    }
                })
            )
        }
    )
)