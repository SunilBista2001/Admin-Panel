import React from "react";
import Modal from "../../../components/Modal/Modal";
import { useForm } from "react-hook-form";

function EditEmployee({ data, closeModal }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      employee_name: data.name,
      employee_address: data.address,
      employee_phone: data.phone,
      email_address: data.email,
      role: data.role,
      workTime: data.workTime,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal title="Edit Employee">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group ">
          <label for="title">Name of Employee</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name of Employee"
            {...register("employee_name", {
              required: "Enter the Name of Employee",
            })}
          />
        </div>
        <div className="w-full flex items-center gap-4 justify-between my-3">
          <div class="form-group w-1/2">
            <label for="title">Home Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Employee's Home Address"
              {...register("employee_address", {
                required: "Enter the address of Employee",
              })}
            />
          </div>
          <div class=" w-1/2">
            <label for="title">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Employee's Phone Number"
              {...register("employee_phone", {
                required: "Enter the Phone Number of Employee",
              })}
            />
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="title">Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Email Address"
            {...register("email_address", {
              required: "Enter the Email Address of Employee",
            })}
          />
        </div>
        <div className="w-full flex items-center gap-4 justify-between mb-3">
          <div class="form-group w-1/2">
            <label for="title">Employee Role</label>
            <input
              type="text"
              className="form-control"
              placeholder="Employee Role "
              {...register("role", {
                required: "Enter the Employee Role",
              })}
            />
          </div>
          <div class=" w-1/2">
            <label for="title">Work Time</label>
            <input
              type="text"
              className="form-control"
              placeholder="Part-Time/ Full-Time"
              {...register("workTime", {
                required: "Enter the Work Time",
              })}
            />
          </div>
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

export default EditEmployee;
