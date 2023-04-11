import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";

function AddPagesModal({ closeModal }) {
  //
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add Pages">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input Fields */}
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the Title"
            {...register("title", {
              required: true,
            })}
          />
        </div>
        <div class="form-group">
          <label for="title">Description</label>
          <textarea
            className="form-control"
            cols="30"
            rows="5"
            {...register("description", {
              required: true,
            })}
          ></textarea>
        </div>
        <div class="form-group">
          <label for="title">Slug</label>
          <input
            type="text"
            name="slug"
            className="form-control"
            {...register("slug", {
              required: true,
            })}
          />
        </div>
        {/* Footer */}
        <footer className="card-footer mt-4">
          <div className="row">
            <div className="flex justify-end gap-3">
              <button className="btn btn-primary modal-confirm" type="submit">
                Submit
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

export default AddPagesModal;
