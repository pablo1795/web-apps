import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: (page = 1) => `/employees?page=${page}`,
            providesTags: ['Employee']
        }),
        getEmployeeById: builder.query({
            query: (postId) => '/employees/' + postId,
            providesTags: ['Employee']
        }),
        createEmployee: builder.mutation({
            query: (employee) => ({
                body: employee,
                method: 'POST',
                url: '/employees/create_employee',
            }),
            invalidatesTags: ['Employee']
        }),
        updateEmployee: builder.mutation({
            query: (employee) => ({
                body: employee,
                method: 'PUT',
                url: `/employees/update_employee/${employee._id}`,
            }),
            invalidatesTags: ['Employee']
        }),
        deleteEmployee: builder.mutation({
            query: ({id}) => ({
                body: id,
                method: 'DELETE',
                url: `/employees/delete_employee/${id}`,
            }),
            invalidatesTags: ['Employee']
        }),
    }),
});

export const {
    useGetAllEmployeesQuery,
    useGetEmployeeByIdQuery,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
    useUpdateEmployeeMutation,
} = employeesApi;