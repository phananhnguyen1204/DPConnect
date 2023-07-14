import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import AuthInput from "./auth/AuthInput";

function RegisterForm() {
  const { status } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => console.log(data);
  // console.log("value", watch());
  // console.log("errors", errors);
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors?.name?.message}
          ></AuthInput>
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          ></AuthInput>
          <AuthInput
            name="status"
            type="text"
            placeholder="Status (Optional)"
            register={register}
            error={errors?.status?.message}
          ></AuthInput>
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          ></AuthInput>
          {/* <input type="text" {...register("name")}></input> */}
          <button
            type="submit"
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            {status === "loading" ? (
              <PulseLoader color="#36d7b7" size={16} />
            ) : (
              "Sign up"
            )}
          </button>
          {/* Sign in link */}
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>have an account ?</span>
            <Link
              to="/login"
              className=" hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;