import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASIC_RUL } from '.';

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: BASIC_RUL,
    }),
    endpoints(builder){
        return {
            fetchAlbums: builder.query({
                query:(user)=>{
                    return {
                        method: "GET",
                        url: "/albums",
                        params:{
                            userId: user.id
                        }
                    }
                }
            }),
            createAlbum: builder.mutation({

            }),
            removeAlbum: builder.mutation({

            }),
        }
    }
});

console.log([albumsApi.reducerPath]);



export { albumsApi }
export const {
    useFetchAlbumsQuery,
} = albumsApi;