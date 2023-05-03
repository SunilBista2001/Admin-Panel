import React, { useState } from "react";
import EditEmployee from "./EditEmployee";

function HostelEmployee({ data }) {
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);
  const [editEmployeeData, setEditEmployeeData] = useState(null);

  const editEmployee = (data) => {
    setShowEditEmployeeModal(true);
    setEditEmployeeData(data);
  };

  return (
    <div className="card-body h-1/2 overflow-y-scroll scrollbar-hide">
      {showEditEmployeeModal && (
        <EditEmployee
          data={editEmployeeData}
          closeModal={() => setShowEditEmployeeModal(false)}
        />
      )}
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Email</th>
            <th>Work Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.phone}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
              <td>{employee.workTime}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => editEmployee(employee)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button className="ml-3 delete-row">
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HostelEmployee;
