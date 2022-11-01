import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementSalary,
  decrementSalary,
} from "../store/feature/employeeSlice";
import EmployeeForm from "./EmployeeForm";

export default function Employee() {
  // initial State employees
  const employees = useSelector((store) => store.employee);
  console.log(employees);
  const dispatch = useDispatch(); // MEMANGGIL FUNGSI DI REDUCER

  return (
    <div>
      <EmployeeForm />
      {employees.map((employee) => {
        return (
          /*untuk primary key*/
          <div key={employee.id}>
            <p>No.{employee.id}</p>
            <p>Nama:{employee.name}</p>
            <p>Alamat:{employee.address}</p>
            <p>Gaji:{employee.salary}</p>
            <button onClick={() => dispatch(incrementSalary(employee.id))}>
              ➕GAJI
            </button>
            <button onClick={() => dispatch(decrementSalary(employee.id))}>
              ➖GAJI
            </button>
          </div>
        );
      })}
    </div>
  );
}
