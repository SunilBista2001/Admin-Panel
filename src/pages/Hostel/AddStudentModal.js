import React from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";

function AddStudentModal({ closeModal }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add Student">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group ">
          <label for="title">Name of Student</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name of Student"
            {...register("student_name", {
              required: "Enter the Name of Student",
            })}
          />
        </div>
        <div className="w-full flex items-center gap-4 justify-between my-3">
          <div class="form-group w-1/2">
            <label for="title">Home Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Student's Home Address"
              {...register("student_address", {
                required: "Enter the address of Student",
              })}
            />
          </div>
          <div class=" w-1/2">
            <label for="title">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Student's Phone Number"
              {...register("student_address", {
                required: "Enter the address of Student",
              })}
            />
          </div>
        </div>
        <div className="w-full flex items-center gap-4 justify-between mb-3">
          <div class="form-group w-1/2">
            <label for="title">Guardian's Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Guardian's Name "
              {...register("student_guardian_name", {
                required: "Enter the Guardian's Name",
              })}
            />
          </div>
          <div class=" w-1/2">
            <label for="title">Guardian's Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Guardian's Phone Number"
              {...register("student_guardian_phone", {
                required: "Enter the Guardian's Phone Number",
              })}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="title">Which College he/she Studying?</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the College Name"
            {...register("student_college_name", {
              required: "Enter the College Name of Student",
            })}
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

export default AddStudentModal;
