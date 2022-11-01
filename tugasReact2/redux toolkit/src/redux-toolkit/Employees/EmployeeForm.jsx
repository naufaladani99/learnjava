import React, { useState } from "react";
import { addEmployee } from "../store/feature/employeeSlice";

// Ikkeh-ikkeh
// 4112
// 👌👈👌👈💦💦
export default function EmployeeForm() {
  // MENAMBAH EMPLOYEE BARU
  // const [employee, setEmployee] = useState({
  //   id: Math.floor(Math.random() * 1000), //untuk generate otomatis
  //   name: "",
  //   address: "",
  //   salary: 0,
  // });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    // Berfunsi untuk tidak reload page
    e.preventDefault(); // 👍
    console.log("Ini di Employee Form");
    dispatch(
      addEmployee({
        id: Math.floor(Math.random() * 1000),
        name,
        address,
        salary,
      })
    );
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
    if (e.target.name === "salary") {
      setSalary(e.target.value);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Nama</label>
      <input
        value={name}
        onChange={(e) => handleChange(e)}
        type="text"
        name="name"
        id="name"
      />
      <br />
      <label htmlFor="address">Alamat</label>
      <input
        value={address}
        onChange={(e) => handleChange(e)}
        type="text"
        name="address"
        id="address"
      />
      <br />
      <label htmlFor="salary">Salary</label>
      <input
        value={salary}
        onChange={(e) => handleChange(e)}
        type="number"
        name="salary"
        id="salary"
      />
      <br />
      <button type="submit">Add Employee</button>
    </form>
  );
}
// kimochi
