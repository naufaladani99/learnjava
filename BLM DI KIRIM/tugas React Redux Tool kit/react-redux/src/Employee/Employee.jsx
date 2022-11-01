import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEmployee,
  incrementSalary,
  decrementSalary,
} from "../store/features/employeeSlice";
//
import FormInput from "../Form/FormInput";

export default function Employee() {
  const dispatch = useDispatch();
  const { employee, totalSlary } = useSelector((store) => store.employees);

  // fungsi sebelah
  const emp = useSelector((state) => state.employees);
  const total = useSelector((state) => state.totalSalary);
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState({
    fullName: undefined,
    salary: 0,
  });

  const onSubmit = (event) => {
    console.log("submit");
    event.preventDefault(); // agar browser tidak terReload
    const payload = {
      empId: Math.round(Math.random() * 10),
      fullName: value.fullName,
      salary: Number(value.salary),
    };
    dispatch(addEmployee(payload));
    setDisplay(false);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    if (e.target.name === "fullname") {
      value.fullName = e.target.value;
      setValue(value);
    }

    if (e.target.name === "salary") {
      value.salary = e.target.value;
      setValue(value);
    }
  };

  //
  return (
    <div>
      <button onClick={() => setDisplay(true)}>Add Employee</button>
      {display ? (
        <FormInput onSubmitForm={onSubmit} handleOnChange={handleChange} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>fullname</th>
              <th>salary</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.empId}</td>
                <td>{e.fullName}</td>
                <td>{e.salary}</td>
                <td>
                  <button
                    onClick={() => dispatch(incrementSalary({ id: e.empId }))}
                  >
                    Tambah Gaji
                  </button>
                  <button
                    onClick={() => dispatch(decrementSalary({ id: e.empId }))}
                  >
                    Kurang Gaji
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        Total Slary: <b>{totalSlary}</b>
      </div>
    </div>
  );
}
