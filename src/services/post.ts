import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({
      query: () => "/",
  
    }),
    
  }),
});

export const { useGetPostQuery} = postApi;