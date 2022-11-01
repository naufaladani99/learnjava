import { createSlice } from "@reduxjs/toolkit";

const iniEmpoye = [
  {
    empId: 1,
    fullName: "NaufalA",
    salary: 1000,
  },
  {
    empId: 2,
    fullName: "adams",
    salary: 2000,
  },
  {
    empId: 3,
    fullName: "Jats",
    salary: 5000,
  },
];

const initialState = {
  employee: [...iniEmpoye],
  totalSlary: 1000 + 2000 + 5000,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employee.push(action.payload);
      state.totalSlary = state.employee.reduce((a, b) => a + b.salary, 0);
    },
    incrementSalary: (state, action) => {
      const { payload } = action;
      state.employee.map((employee) => {
        if (employee.empId === payload.id) {
          employee.salary += 500;
        }
      });

      state.totalSlary += 500;
    },
    decrementSalary: (state, action) => {
      const { payload } = action;
      state.employee.map((employee) => {
        if (employee.empId === payload.id) {
          employee.salary -= 500;
        }
      });
      state.totalSlary -= 500;
    },
  },
});
export const { addEmployee, incrementSalary, decrementSalary } =
  employeeSlice.actions;

export default employeeSlice.reducer;
