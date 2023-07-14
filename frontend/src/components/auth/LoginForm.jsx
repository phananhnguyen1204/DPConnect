import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import AuthInput from "./AuthInput";
import { loginUser } from "../../features/userSlice";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (values) => {
    let res = await dispatch(loginUser({ ...values }));
    console.log(res);
    if (res?.payload?.user) {
      navigate("/");
    }
  };

  // console.log(picture, readablePicture);

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm">Sign in &darr;</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          ></AuthInput>
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          ></AuthInput>

          {/* if error occurs */}
          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : null}

          {/* sign up button */}
          <button
            type="submit"
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            {status === "loading" ? (
              <PulseLoader color="#36d7b7" size={16} />
            ) : (
              "Sign in"
            )}
          </button>
          {/* Sign in link */}
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>Do not have an account ?</span>
            <Link
              to="/register"
              className=" hover:underline cursor-pointer transition ease-in duration-300"
            >
              &rarr; Sign up &larr;
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
