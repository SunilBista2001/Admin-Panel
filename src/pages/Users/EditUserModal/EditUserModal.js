import React from "react";
import Modal from "../../../components/Modal/Modal";

function EditUserModal({ closeModal }) {
  return (
    <Modal title="Edit User">
      <form action="">
        <footer className="card-footer mt-4">
          <div className="row">
            <div className="flex justify-end gap-3">
              <button className="btn btn-primary modal-confirm" type="submit">
                Save
              </button>
              <button
                className="btn btn-default modal-dismiss"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </footer>
      </form>
    </Modal>
  );
}

export default EditUserModal;
