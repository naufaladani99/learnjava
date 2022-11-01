import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "naufal",
    address: "tangerng",
    salary: 5000,
  },
  {
    id: 2,
    name: "charis",
    address: "Kab.Tangerang",
    salary: 500,
  },
  {
    id: 3,
    name: "freezar",
    address: "jakarta",
    salary: 1000,
  },
];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.push(action.payload);
    },
    //
    //
    //
    incrementSalary(state, action) {
      state.map((employee) => {
        if (employee.id !== action.payload.id) {
          return employee;
        } else {
          employee.salary += 500;
          return employee;
        }
      });
    },
    decrementSalary(state, action) {
      state.map((employee) => {
        if (employee.id !== action.payload.id) {
          return employee;
        } else {
          employee.salary -= 500;
          return employee;
        }
      });
    },
  },
});

export const { addEmployee, decrementSalary, incrementSalary } =
  employeeSlice.actions;
export default employeeSlice.reducer; //
