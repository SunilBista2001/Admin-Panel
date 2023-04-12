import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getUserSettings } from "../../api/services/Settings";
import Loader from "../../components/Loader/Loader";

function Settings() {
  // const { isLoading, data: user } = useQuery("user-setting", getUserSettings);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full h-full">
      <form
        className="flex flex-wrap items-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="form-group w-[40%] mt-3">
          <label for="title">Company Name</label>
          <input
            type="text"
            className="form-control "
            placeholder="Enter the Company Name"
            {...register("company_name")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Email</label>
          <input
            type="text"
            className="form-control mt-0"
            placeholder="Enter the Company Email"
            {...register("company_email")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Phone</label>
          <input
            type="tel"
            className="form-control mt-0"
            name="phone"
            placeholder="+977 XXXXXXXXX"
            {...register("company_phone")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Company Logo</label>
          <input
            type="file"
            className="form-control mt-0"
            {...register("company_logo")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Favicon</label>
          <input
            type="file"
            className="form-control mt-0"
            {...register("company_favicon")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Facebook</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("facebook")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Instagram</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("instagram")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Tiktok</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("tiktok")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Twitter</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("twitter")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Linked In</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("linked_in")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Skype</label>
          <input
            type="url"
            className="form-control mt-0"
            {...register("skype")}
          />
        </div>
        <div className="w-full flex  justify-start">
          <button type="submit" className="mb-1 mt-1 me-1 px-5 btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
