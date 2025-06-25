import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const login = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-api-key", "reqres-free-v1");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (creadentails) => ({
        url: "auth/login",
        method: "POST",
        body: creadentails,
      }),
    }),
  }),
});
export const { useLoginUserMutation } = login;
