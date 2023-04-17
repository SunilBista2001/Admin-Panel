import { useForm } from "react-hook-form";
import Modal from "../../../components/Modal/Modal";
import AddPhoto from "../../../assets/img/open-camera.png";
import { useMutation } from "react-query";
import { addPaymentOption } from "../../../api/services/Payment";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { uploadImage } from "../../../api/services/Category";

function AddPaymentModal({ closeModal }) {
  const { register, handleSubmit } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const addImage = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // const image = URL.createObjectURL(file);
    setSelectedFile(file);
    // console.log(selectedFile);
  };

  const { mutate } = useMutation(addPaymentOption, {
    onSuccess: () => {
      toast.success("Added Payment Option Successfully", { theme: "colored" });
    },
  });

  const onsubmit = async (data) => {
    const imageUrl = await uploadImage(selectedFile);
    let order = 1;
    let status = 1;
    console.log(data);
    mutate({ ...data, order, status });
    closeModal();
  };

  return (
    <Modal title="Add Payment Method">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div class="form-group flex justify-center w-full gap-3 items-center flex-col">
          {!selectedFile ? (
            <img src={AddPhoto} alt="" className="w-40 object-contain" />
          ) : (
            <img
              src={selectedFile}
              alt=""
              className="w-40 h-40 object-cover rounded-full"
            />
          )}
          <button
            type="button"
            onClick={() => addImage.current.click()}
            className="mb-1 mt-1  btn btn-primary"
          >
            Upload Photo
          </button>
          <input
            type="file"
            hidden
            ref={addImage}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the Title of Payment Option"
            {...register("title", {
              required: true,
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

export default AddPaymentModal;
