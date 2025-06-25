import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { api as userApi } from "@/features/api/fetchUser";
import { login as authLogin } from "@/features/api/loginUser";
const store = configureStore({
  reducer: {
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    [authLogin.reducerPath]: authLogin.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authLogin.middleware),
});
export default store;
