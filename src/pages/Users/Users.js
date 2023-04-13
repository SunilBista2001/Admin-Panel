import { useState } from "react";
import Button from "../../components/Button/Button";
import UserTable from "./UserTable";
import AddUserModal from "./AddUserModal/AddUserModal";

function Users() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  return (
    <div className="container mx-auto my-4">
      {showAddUserModal && (
        <AddUserModal closeModal={() => setShowAddUserModal(false)} />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddUserModal(true)}>
          <Button title="Add Users" />
        </button>
      </div>
      <div className="my-4">
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
