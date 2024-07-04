import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useGetAllEmployeesQuery } from "../../api/employeesApi";

const EMPLOYEE_BASE_URL = 'http://localhost:3001/employees';

export const fetchEmployees = createAsyncThunk('employees/fetch', async (page = 1) => {
  const response = await fetch(`${EMPLOYEE_BASE_URL}?page=${page}`);
  // const response = await useGetAllEmployeesQuery.endpoints.getAllEmployees();
  const data = await response.json();
  return data;
});

export const fetchEmployeeById = createAsyncThunk('employees/fetchById', async (id) => {
  const response = await fetch(`${EMPLOYEE_BASE_URL}/${id}`);
  const data = await response.json();
  return data;
});

export const createEmployee = createAsyncThunk('employees/create', async (employee) => {
  const response = await fetch(`${EMPLOYEE_BASE_URL}/create_employee`, {
    method: 'POST',
    body: JSON.stringify(employee),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const updateEmployee = createAsyncThunk('employees/update', async (employee) => {
  const response = await fetch(`${EMPLOYEE_BASE_URL}/update_employee/${employee._id}`, {
    method: 'PUT',
    body: JSON.stringify(employee),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const deleteEmployee = createAsyncThunk('employees/delete', async ({ id }) => {
  const response = await fetch(`${EMPLOYEE_BASE_URL}/delete_employee/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
});

export const employeeSliceExam = createSlice({
  name: 'employee',
  initialState: {
    entities: [],
    selectedEmployee: null,
    status: 'idle',
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
    },
  },
  reducers: {
    setSelectedEmployee: (state, action) => {
      state.z = action.payload;
    },
    resetSelectedEmployee: (state) => {
      state.selectedEmployee = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload.results;
        state.pagination = {
          currentPage: action.payload.page,
          totalPages: action.payload.total_pages,
        };
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.selectedEmployee = action.payload;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.entities.findIndex((employee) => employee._id === action.payload._id);
        if (index !== -1) {
          state.entities[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.entities = state.entities.filter((employee) => employee._id !== action.payload._id);
      });
  },
});

export const { setSelectedEmployee, resetSelectedEmployee, entities } = employeeSliceExam.actions;

export default employeeSliceExam.reducer;
