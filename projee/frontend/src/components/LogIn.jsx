import { useState } from "react";
import Logo from "../icon/LogLogo";
import axios from "axios";
const api = "http://localhost:8000/users";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setpassWord] = useState("");
  const LogIn = async () => {
    const res = await axios.get(api, { email: email, password: password });
    console.log(res, "res");
  };

  return (
    <div className="bg-white flex justify-center items-center ">
      <div className="py-[320px] flex flex-col gap-10 ">
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
            value={email}
            type="text"
            placeholder="Email"
            className="border py-2 px-2 rounded-xl "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            // value={password}
            type="text"
            placeholder="Password"
            className="border py-2 px-2 rounded-xl "
            onChange={(e) => setpassWord(e.target.value)}
          />
          <button className="btn btn-primary rounded-xl" onClick={LogIn}>
            Log in
          </button>
        </div>
        <div>
          <p className="text-center">
            Don’t have account?{" "}
            <span className=" text-sky-600 cursor-pointer">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
