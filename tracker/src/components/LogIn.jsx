import Logo from "@/icon/LogLogo";

export default function LogIn() {
  return (
    <div className="bg-white flex justify-center items-center ">
      <div className="py-[400px] flex flex-col gap-10 ">
        <div className="flex justify-center">
          <Logo />
          <h3>Geld</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-center">Welcome Back</h3>
          <p className="text-center">Welcome back, Please enter your details</p>
        </div>
        <div className="flex flex-col gap-3 w-[384px]">
          <input
            type="text"
            placeholder="Email"
            className="border py-2 px-2 rounded-xl "
          />
          <input
            type="text"
            placeholder="Password"
            className="border py-2 px-2 rounded-xl "
          />
          <button className="btn btn-primary rounded-xl">Log in</button>
        </div>
        <div>
          <p className="text-center">
            Don’t have account? <span className=" text-sky-600">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
