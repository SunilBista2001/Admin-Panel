import Button from "../../components/Button/Button";
import UserTable from "./UserTable";

function Users() {
  return (
    <div className="container mx-auto my-4">
      <div className="flex w-full justify-end">
        <button>
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
