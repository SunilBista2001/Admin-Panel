import React, { useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import AddPhoto from "../../assets/img/open-camera.png";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addCategory } from "../../api/services/Category";

function AddCategoriesModal({ closeModal }) {
  const { register, handleSubmit } = useForm();
  const addImage = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const image = URL.createObjectURL(file);
    setSelectedFile(image);
    console.log(selectedFile);
  };

  const { mutate, isLoading } = useMutation(addCategory, {
    onSuccess: () => {},
    onError: () => {},
  });

  const onSubmit = (data) => {
    const newData = {
      data,
      image: selectedFile,
    };
    console.log(newData); //Data with Image
    mutate(newData);
    closeModal();
  };

  return (
    <>
      <Modal title="Add Categories">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              name="description"
              placeholder="Enter the Description"
              cols="30"
              className="form-control"
              rows="5"
              {...register("description", {
                required: true,
              })}
            ></textarea>
          </div>
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
          <footer className="card-footer mt-4">
            <div className="row">
              <div className="flex justify-end gap-3">
                <button
                  className="btn btn-primary modal-confirm"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting" : "Submit"}
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
    </>
  );
}

export default AddCategoriesModal;
