import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from "../features/Auth/LoginApi";
import { registrationAPI } from "../features/Auth/RegistrationAPI";
import { usersAPI } from "../features/Users/usersApi";


// Import slices
import userActionsReducer from "../features/Users/userActionsSlice";
import userAuthReducer from "../features/Auth/UserAuthSlice";

const store = configureStore({
  reducer: {
    // API reducers
    [loginApi.reducerPath]: loginApi.reducer,
    [registrationAPI.reducerPath]: registrationAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    
    // State slices
    userActions: userActionsReducer,
    userAuth: userAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersAPI.middleware,
      loginApi.middleware,
      registrationAPI.middleware,
    ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };