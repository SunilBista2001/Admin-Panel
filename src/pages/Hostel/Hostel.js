import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AddStudentModal from "./AddStudentModal";
import HostelStudent from "./HostelStudent/HostelStudent";
import HostelEmployee from "./HostelEmployee/HostelEmployee";
import AddEmployeeModal from "./HostelEmployee/AddEmployee";

let data = [
  {
    id: 0,
    name: "Sunil Bista",
    address: "Tikapur",
    phone: "9843356917",
    guardianName: "Bam Bahadur Bista",
    guardianPhone: "9868478896",
    college: "Texas Intl College",
  },
  {
    id: 1,
    name: "Cristiano Ronaldo",
    address: "Saudi Arabia",
    phone: "686658984",
    guardianName: "Sunil Bista",
    guardianPhone: "58914567291",
    college: "Al Nassar",
  },
];

let data2 = [
  {
    id: 0,
    name: "Prakash Niroula",
    address: "Jhapa",
    phone: "9869804695",
    email: "pinkthefloyd@gmail.com",
    role: "Senior Developer",
    workTime: "Full Time",
  },
  {
    id: 1,
    name: "Sunil Bista",
    address: "Tikapur",
    phone: "9843356917",
    email: "btwitsbista@gmail.com",
    role: "Junior Web Developer",
    workTime: "Part Time",
  },
];

function Hostel() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  return (
    <div className="container mx-auto my-4">
      {showAddStudentModal && (
        <AddStudentModal closeModal={() => setShowAddStudentModal(false)} />
      )}
      {showAddEmployeeModal && (
        <AddEmployeeModal closeModal={() => setShowAddEmployeeModal(false)} />
      )}
      <div
        className="flex w-full justify-end"
        onClick={() => setShowAddStudentModal(true)}
      >
        <Button title="Add Student" />
      </div>

      <div className="my-4">
        <h1 className="text-3xl font-bold mb-4">List of Hostel's Student</h1>
        <HostelStudent data={data} />
      </div>

      <div className="my-4">
        <div
          className="w-full flex justify-end my-4"
          onClick={() => setShowAddEmployeeModal(true)}
        >
          <Button title="Add Employee" />
        </div>
        <h1 className="text-3xl font-bold mb-4">List of Hostel's Employee</h1>
        <HostelEmployee data={data2} />
      </div>
    </div>
  );
}

export default Hostel;
