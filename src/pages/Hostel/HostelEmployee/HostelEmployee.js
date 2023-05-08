import React, { useState } from "react";
import EditEmployee from "./EditEmployee";
import DeleteEmployeeModal from "./DeleteEmployeeModal";

function HostelEmployee({ data }) {
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
  const [editEmployeeData, setEditEmployeeData] = useState(null);
  const [EmployeeId, setEmployeeId] = useState(null);

  const editEmployee = (data) => {
    setShowEditEmployeeModal(true);
    setEditEmployeeData(data);
  };

  const deleteEmployee = (id) => {
    setEmployeeId(id);
    setShowDeleteEmployeeModal(true);
  };

  return (
    <div className="card-body h-1/2 overflow-y-scroll scrollbar-hide">
      {showEditEmployeeModal && (
        <EditEmployee
          data={editEmployeeData}
          closeModal={() => setShowEditEmployeeModal(false)}
        />
      )}
      {showDeleteEmployeeModal && (
        <DeleteEmployeeModal
          title="Employee"
          closeModal={() => setShowDeleteEmployeeModal(false)}
          id={EmployeeId}
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
                <button
                  className="ml-3 delete-row"
                  onClick={() => deleteEmployee(employee.id)}
                >
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
