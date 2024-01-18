"use client";
import Button from "@/components/Button";
import Geld from "@/components/Geld";
import Money from "@/icon/Money";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const api = "http://localhost:8000/users";
export default function Step() {
  const router = useRouter();
  const [currency, setCurrens] = useState(true);
  const laststep = () => {
    try {
      let data = JSON.parse(localStorage.getItem("data"));
      localStorage.setItem(
        "data",
        JSON.stringify({ ...data, currency_type: currency ? "MNT" : "USA" })
      );
    } catch (error) {}
    router.push("/laststep");
  };
  const toggle = () => {
    setCurrens(!currency);
  };
  return (
    <div className="flex flex-col gap-32 w-96 m-auto">
      <div className="flex flex-col gap-12 pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col m-auto items-center gap-7 w-96">
        <Money />
        <p>Select base currency</p>
        <div>
          <select
            className="pr-32 py-2 pl-8 rounded bg-slate-400"
            value={currency}
            onChange={toggle}
          >
            <option>MNT-Mongolian Tugrik</option>
            <option>USA-American Dollar</option>
          </select>
        </div>
        <p>
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <button className="btn btn-primary w-full" onClick={laststep}>
          next
        </button>
      </div>
    </div>
  );
}
