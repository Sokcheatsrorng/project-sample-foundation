import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getDecryptedAccessToken, getDecryptedRefreshToken } from "../utils/tokenUtils";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_CAR_BASE_URL ,
  prepareHeaders: (headers) => {
    const token = getDecryptedAccessToken();
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

// Base query with error handling and logging
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
 

  let result = await baseQuery(args, api, extraOptions);


  // Handle token refresh for 401 errors
  if (result.error && result.error.status === 401) {
    // Try to refresh token
    const refreshToken = getDecryptedRefreshToken();
    console.log("The value of refresh Token: ", refreshToken);
    const refreshResult = await baseQuery(
      {
        url: 'https://car-nextjs-api.cheatdev.online/refresh-token',
        method: 'POST',
        body: { refresh_token:refreshToken  }
      },
      api,
      extraOptions
    );

    if (refreshResult) {
      // Store new token
      // api.dispatch(setCredentials(refreshResult.data));
      console.log(refreshResult)
      
      // Retry original query with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Refresh failed, logout user
      // api.dispatch(logout());
      console.log("the logout")
    }
  }

  return result;
};



export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery:baseQueryWithInterceptor,
   endpoints: () => ({})
})