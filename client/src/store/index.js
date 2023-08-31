import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';


export const store = (usersReducersPersisted) => (
    configureStore(
        {
            reducer: {
                users: usersReducersPersisted
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