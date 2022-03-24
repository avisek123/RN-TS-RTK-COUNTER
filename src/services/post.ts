import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";



export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const addPostData = async (payload: IPost) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(payload)
  );
  return response;
};

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({
      query: () => "/",
      transformResponse:(response : IPost[])=>response?.slice(0,3),
  
    }),
    addPost: builder.mutation({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: 'post',
        // body: patch,
      }),
     
    }),
    
  }),
});

export const { useGetPostQuery,useAddPostMutation} = postApi;



