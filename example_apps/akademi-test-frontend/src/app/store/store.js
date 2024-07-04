import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { employeesSlice } from './slices/employees/employeesSlice';
import { employeesApi } from './api/employeesApi';

import { assetsSlice } from './slices/assets/assetsSlice';
import { assetApi } from './api/assetApi';

import * as omega from "./slices/employees/employeesSlice2Exam"

console.log(omega);

export const store = configureStore({
  reducer: {
    // employeeS: employeeSliceExam.reducer,
    // [employeesApi.reducerPath]: employeesApi.reducer,

    employee: employeesSlice.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,

    asset: assetsSlice.reducer,
    [assetApi.reducerPath]: assetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware, assetApi.middleware),
});

setupListeners(store.dispatch);
