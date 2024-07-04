import { createSlice } from "@reduxjs/toolkit";

const initialAssets = [];

export const assetsSlice = createSlice({
    name: "asset",
    initialState: {
        assets: initialAssets,
        error: null,
        isLoading: false,
        page: 0,
    },
    reducers: {
        addAsset: (state, action) => {
            state.assets.push(action.payload);
        },
        editAsset: (state, action) => {
            const assetToEdit = action.payload;
            const index = state.assets.findIndex((asst) => asst.ASSET_ID === assetToEdit.ASSET_ID);
            state.assets[index] = { ...state.assets[index], ...assetToEdit };
        },
        deleteAsset: (state, action) => {
            state.assets = state.assets.filter((asst) => asst.ASSET_ID !== action.payload);
        },
    },
});

export const {
    addAsset,
    editAsset,
    deleteAsset,
} = assetsSlice.actions;
