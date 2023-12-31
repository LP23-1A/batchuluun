"use client";
import Geld from "@/components/Geld";
import Money from "@/components/Money";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const api = "http://localhost:8000/users";
export default function Step() {
  const router = useRouter();
  const [currency_type, setCurrens] = useState("");
  console.log(localStorage.getItem("data"));
  let data = localStorage.getItem("data");
  const keys = { currency_type };
  const laststep = () => {
    router.push("/laststep");
    localStorage.setItem(data, JSON.stringify(keys));
    console.log(keys);
  };
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-12 w-screen pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul class="steps">
            <li class="step step-primary">Currency</li>
            <li class="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col m-auto items-center gap-7 w-96">
        <Money />
        <p>Select base currency</p>
        <div>
          <select
            className="pr-32 py-2 pl-8 rounded bg-slate-400"
            value={currency_type}
            onChange={(e) => setCurrens(e.target.value)}
          >
            <option value={currency_type}>MNT-Mongolian Tugrik</option>
            <option value={"USA-American Dollar"}>USA-American Dollar</option>
          </select>
        </div>
        <p>
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <button className="btn btn-primary px-40 py-4" onClick={laststep}>
          Confirm
        </button>
      </div>
    </div>
  );
}
