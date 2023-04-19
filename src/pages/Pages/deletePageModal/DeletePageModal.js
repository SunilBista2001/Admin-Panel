import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deletePage } from "../../../api/services/Page";

function DeletePageModal({ id, title, closeModal, refetch }) {
  //
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deletePage, {
    onSuccess: () => {
      toast.success("Deleted Successfully", { theme: "colored" });
      queryClient.invalidateQueries("fetch-page");
      refetch();
    },
  });

  const handleDelete = () => {
    mutate({ id: id });

    closeModal();
  };

  return (
    <div className="w-full fixed inset-0 bg-opacity-75 bg-gray-300 z-10 flex items-center justify-center ">
      <section className="card w-1/2 ml-64">
        <header className="card-header">
          <h2 className="card-title">Are you sure?</h2>
        </header>
        <div className="card-body">
          <div className="modal-wrapper">
            <div className="modal-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="modal-text">
              <h4 className="font-weight-bold text-dark">Delete {title}</h4>
              <p>Are you sure that you want to delete ?</p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <div className="row">
            <div className="col-md-12 text-end">
              <button
                className="btn btn-primary modal-confirm mr-3"
                onClick={handleDelete}
              >
                Confirm
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
      </section>
    </div>
  );
}

export default DeletePageModal;
