"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Geld from "@/components/Geld";
import Button from "@/components/Button";
import CategoryNameData from "@/components/CategoryNameData";
import Alert from "@/components/Alert";
const api = "http://localhost:8000/users/oneuser";
export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LogIn = async () => {
    const res = await axios.post(api, { email: email, password: password });
    if ((res.data = "success")) {
      useEffect(() => {
        setTimeout(router.push("/loading"));
      }, 8000);
    } else {
      <Alert />;
    }
  };
  return (
    <div className=" bg-indigo-900">
      <div className="bg-white flex justify-center items-center w-1/2 h-screen ">
        <div className=" flex flex-col gap-10 ">
          <div className="flex justify-center">
            <Geld />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-center">Welcome Back</h3>
            <p className="text-center">
              Welcome back, Please enter your details
            </p>
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
              value={password}
              type="password"
              placeholder="Password"
              className="border py-2 px-2 rounded-xl "
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button name={"Log in"} />
          </div>
          <div>
            <p className="text-center">
              Don’t have account?{" "}
              <span
                className=" text-blue-800 cursor-pointer"
                onClick={() => router.push("/signin")}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <CategoryNameData />
      </div>
    </div>
  );
}
