import Leading from "@/icon/Leading";
import MyToggle from "./Switch";
import { useState } from "react";
import Toggle from "./Switch";

export default function AddCard({ closeModal }) {
  const [detail, setDetail] = useState("");

  return (
    <div className="w-[792px] border rounded-xl absolute top-[400px] left-[350px] z-100 bg-black">
      <div className="flex px-6 py-5 justify-between">
        <p className="font-bold">Add record</p>
        <button onClick={() => closeModal(false)} className="text-2xl">
          x
        </button>
      </div>
      <div className="border-b"></div>
      <div className="flex gap-6">
        <div className="w-1/2 p-6 flex flex-col gap-6">
          <div className="flex border rounded-3xl ">
            <Toggle />
          </div>
          <div className="border bg-white rounded-xl p-3">
            <p className="font-bold">Amount </p>
            <p>$ 000.00</p>
          </div>
          <div>
            <p>Category</p>
            <div className="border rounded-xl p-3  flex justify-between">
              <select
                name=""
                id=""
                className="w-40 p-1 rounded-xl"
                onChange={(el) => setDetail(el.target.value)}
              >
                <option value="">Home</option>
                <option value="">Gift</option>
                <option value="">Food</option>
                <option value="">Drink</option>
                <option value="">Taxi</option>
              </select>
              <Leading />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <p>Date</p>
              <input
                type="date"
                className="border rounded-xl  p-3"
                name="trip-start"
                min="2024-01-01"
                max="2024-12-31"
              />
            </div>
            <div>
              <p>Date</p>
              <input
                type="time"
                className="border  p-3 rounded-xl"
                name="appt"
                value="09:00"
                min="09:00"
                max="18:00"
                required
              />
            </div>
          </div>
          <div>
            <button className="btn btn-primary w-1/2">Add card</button>
          </div>
        </div>
        <div className="p-6 w-1/2">
          <div className="flex flex-col gap-4">
            <p>Payee</p>
            <div className="border p-3 rounded-xl flex justify-between">
              <p>Write here</p>
              <Leading />
            </div>
            <div className="flex flex-col gap-4">
              <p>Note</p>
              <textarea
                name=""
                className="border rounded-xl"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <details></details>
    </div>
  );
}
