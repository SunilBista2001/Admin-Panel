import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Modal from "../../../components/Modal/Modal";
import { updateQuestion } from "../../../api/services/Question";
import { toast } from "react-toastify";

function EditQuestionModal({ closeModal, question, refetch }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: question.title,
      green_option: question.green_option,
      red_option: question.red_option,
      reward_points: question.reward_points,
    },
  });

  const { mutate } = useMutation(updateQuestion, {
    onSuccess: () => {
      toast.success("Updated Successfully", { theme: "colored" });
      queryClient.invalidateQueries("fetch-question");
      refetch();
    },
  });

  const onsubmit = (data) => {
    let order = 1;
    let status = 1;

    // Getting a Date
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const year = yyyy + "-" + mm + "-" + dd;

    mutate({ ...data, id: question.id, order, status, date: year });
    closeModal();
  };

  return (
    <Modal title="Edit Question">
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

export default EditQuestionModal;
