import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  tagTypes: ["Blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-website-node-4nkd.vercel.app",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"],
    }),
    getBlogbyId: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["Blog"],
    }),
    postBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogbyIdQuery,
  usePostBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
