import React, { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditUserModal from "./EditUserModal/EditUserModal";

let dummyData = [
  {
    id: 0,
    username: "Sunil",
    userImage: "",
    phone: "9843356917",
    role: "Admin",
  },
];

function UserTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  const [userId, setUserId] = useState(null);

  return (
    <div className="card-body">
      {showDeleteModal && (
        <DeleteModal
          title="User"
          id={userId}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}
      {showEditUserModal && (
        <EditUserModal closeModal={() => setShowEditUserModal(false)} />
      )}
      <table className="table table-responsive-md table-hover mb-0 ">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Image</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((user, index) => (
            <tr key={index}>
              <td>{user.id + 1}</td>
              <td>{user.username}</td>
              <td>
                <img
                  src={user.userImage}
                  alt=""
                  className="w-8 h-8 ml-8 rounded-full object-cover"
                />
              </td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => setShowEditUserModal(true)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="ml-3 delete-row"
                  onClick={() => setShowDeleteModal(true)}
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

export default UserTable;
