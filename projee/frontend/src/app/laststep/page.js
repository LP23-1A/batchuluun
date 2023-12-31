"use client";
import Allow from "@/components/Allow";
import Geld from "@/components/Geld";
import axios from "axios";
const api = "http://localhost:8000/users";

export default function Step() {
  console.log(localStorage.getItem("data"));
  const handlerName = async () => {
    // const getItem = localStorage.getItem(key);
    // let res = await axios.post(api, {
    //   getItem,
    // });

    console.log(localStorage.getItem("data"));
  };
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-12 w-screen pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul class="steps">
            <li class="step step-primary">Currency</li>

            <li class="step step-primary">Finish</li>
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
        <button className="btn btn-primary px-32 py-4" onClick={handlerName}>
          Go To Dashboard
        </button>
      </div>
    </div>
  );
}
