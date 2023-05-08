import React, { useState } from "react";
import EditStudentModal from "./EditStudentModal";
import DeleteStudentModal from "./DeleteStudentModal";

function HostelStudent({ data }) {
  const [showEditStudentModal, setShowEditStudentModal] = useState(false);
  const [showDeleteStudentModal, setShowDeleteStudentModal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [studentId, setStudentId] = useState(null);

  const editStudent = (data) => {
    setStudentData(data);
    setShowEditStudentModal(true);
  };

  const deleteStudent = (id) => {
    setStudentId(id);
    setShowDeleteStudentModal(true);
  };

  return (
    <div className="card-body h-1/2 overflow-y-scroll scrollbar-hide">
      {showEditStudentModal && (
        <EditStudentModal
          data={studentData}
          closeModal={() => setShowEditStudentModal(false)}
        />
      )}
      {showDeleteStudentModal && (
        <DeleteStudentModal
          id={studentId}
          title="Student"
          closeModal={() => setShowDeleteStudentModal(false)}
        />
      )}
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Guardian's Name</th>
            <th>Guardian's Phone</th>
            <th>College</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.id + 1}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.guardianName}</td>
              <td>{student.guardianPhone}</td>
              <td>{student.college}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => editStudent(student)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="ml-3 delete-row"
                  onClick={() => deleteStudent(student.id)}
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

export default HostelStudent;
