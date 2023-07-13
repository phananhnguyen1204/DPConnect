import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* //Container */}
      <div className="flex w-[1600px] mx-auto h-full">
        {/* //register form */}
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}

export default Register;
