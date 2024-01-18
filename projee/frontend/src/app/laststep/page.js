"use client";
import Allow from "@/icon/Allow";
import Button from "@/components/Button";
import Geld from "@/components/Geld";
import axios from "axios";
import { useRouter } from "next/navigation";
const api = "http://localhost:8000/users";

export default function Step() {
  const router = useRouter();
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const handlerName = async () => {
    let res = await axios.post(api, {
      name: data.name,
      email: data.email,
      password: data.password,
      currency_type: data.currency,
    });
    router.push("/dashboard");
    console.log("success");
  };
  return (
    <div className="flex flex-col gap-24 w-96 m-auto">
      <div className="flex flex-col gap-12 pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul class="steps">
            <li className="step step-primary">Currency</li>

            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col m-auto items-center gap-7 w-96">
        <Allow />
        <h2 className="text-3xl">Good job</h2>

        <p className="text-center">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
      <button className="btn btn-primary w-full" onClick={handlerName}>
        Go to dashboard
      </button>
    </div>
  );
}
