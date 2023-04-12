import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { login } from "../../api/services/User";
import Logo from "../../assets/company-image/khursani-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const getYear = new Date().getFullYear();

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user-Info", JSON.stringify(data.userinfo));

      console.log(data.userinfo);
      navigate("/");
    },
    onError: () => {},
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="body-sign">
      <div className="center-sign">
        <a href="/" className="logo float-left">
          <img
            src={Logo}
            className="h-48 w-h-48  absolute top-32 left-[480px]"
            height="70"
            alt="Khursani"
          />
        </a>
        <div className="panel card-sign">
          <div className="card-title-sign mt-3 text-end">
            <h2 className="title text-uppercase font-weight-bold m-0">
              <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>
              Sign In
            </h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-3">
                <label>Phone</label>
                <div className="input-group">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Enter your Phone number"
                    className="form-control form-control-lg"
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  <span className="input-group-text">
                    <i className="bx bx-user text-4"></i>
                  </span>
                </div>
              </div>

              <div className="form-group mb-3">
                <div className="clearfix">
                  <label className="float-left">Password</label>
                  <a href="pages-recover-password.html" className="float-end">
                    Lost Password?
                  </a>
                </div>
                <div className="input-group">
                  <input
                    name="otp"
                    type="text"
                    placeholder="Enter your OTP"
                    className="form-control form-control-lg"
                    {...register("otp", {
                      required: true,
                    })}
                  />
                  <span className="input-group-text">
                    <i className="bx bx-lock text-4"></i>
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <button type="submit" className="btn btn-primary mt-2">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-muted mt-3 mb-3">
          &copy; Copyright {getYear}. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Login;
