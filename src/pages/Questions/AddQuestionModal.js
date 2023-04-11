import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";

function AddQuestionModal({ closeModal }) {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add Questions" closeModal={closeModal}>
      <form onSubmit={handleSubmit(onsubmit)}>
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
          <label for="title">Green Option</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Green Options"
            {...register("green_option", {})}
          />
        </div>
        <div class="form-group">
          <label for="title">Red Option</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Red Options"
            {...register("red_option", {})}
          />
        </div>
        <div class="form-group">
          <label for="title">Reward Points</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the Reward Points"
            {...register("rewards_points", {})}
          />
        </div>
        <div class="form-group">
          <label for="title">Date</label>
          <input
            type="date"
            className="form-control"
            {...register("date", { required: true })}
          />
        </div>
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

export default AddQuestionModal;
