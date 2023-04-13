import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addQuestion } from "../../api/services/Question";

function AddQuestionModal({ closeModal }) {
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation(addQuestion, {
    onSuccess: () => {},
  });

  const onsubmit = (data) => {
    let year = new Date().getFullYear();
    console.log(data);
    const newData = {
      ...data,
      date: year,
      reward_points: parseInt(data.reward_points),
    };
    mutate(newData);
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
            {...register("reward_points", {})}
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
