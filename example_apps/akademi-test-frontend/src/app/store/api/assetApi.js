import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const assetApi = createApi({
    reducerPath: 'assetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
        getAllAssets: builder.query({
            query: (page = 1) => `/asset?page=${page}`,
            providesTags: ['Asset']
        }),
        getAssetById: builder.query({
            query: (id) => '/asset/' + id,
            providesTags: ['Asset']
        }),
        createAsset: builder.mutation({
            query: (asset) => ({
                body: asset,
                method: 'POST',
                url: '/asset/create_asset',
            }),
            invalidatesTags: ['Asset']
        }),
        updateAsset: builder.mutation({
            query: (asset) => ({
                body: asset,
                method: 'PUT',
                url: `/asset/update_asset/${asset._id}`,
            }),
            invalidatesTags: ['Asset']
        }),
        deleteAsset: builder.mutation({
            query: ({id}) => ({
                body: id,
                method: 'DELETE',
                url: `/asset/delete_asset/${id}`,
            }),
            invalidatesTags: ['Asset']
        }),
    }),
});

export const {
    useCreateAssetMutation,
    useDeleteAssetMutation,
    useGetAllAssetsQuery,
    useGetAssetByIdQuery,
    useUpdateAssetMutation,
} = assetApi;