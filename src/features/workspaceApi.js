import { apiSlice } from "./api/apiSlice"

export const workspaceApi = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        //WORKSPACE
        createWorkspace: builder.mutation({
            query: (body) => ({
              url: "/workspaces",
              method: "POST",
              body,
            }),

          }),  
        GetWorkspaces: builder.query({
          query: ()=>{
            url
          }
        })      
    }),

})



export const {useCreateWorkspaceMutation, useGetWorkspacesQuery} = workspaceApi;