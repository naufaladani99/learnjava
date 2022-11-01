import { configureStore } from "@reduxjs/toolkit"; // export aja
import employeeSlice from "./feature/employeeSlice"; // export default

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});

export default store;
