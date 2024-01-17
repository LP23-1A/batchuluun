import { useState } from "react";
import Button from "./Button";
import CategoryData from "./CategoryData";
import { CategoryImgData } from "./CategoryImg";
export default function AddCard({ fn }) {
  const [exActive, setExActive] = useState(true);
  const [inActive, setInActive] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const toggled = () => {
    setExActive(!exActive);
    setInActive(!inActive);
    setActiveButton(!activeButton);
  };

  return (
    <div className="">
      <button
        className="btn  btn-primary w-full"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        + Add
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-white ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <p>Add Record</p>
            <div className="border-b"></div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="border rounded-2xl flex items-center">
                  <button
                    onClick={toggled}
                    className="flex items-center w-1/2 justify-center "
                    style={{
                      background: exActive ? "blue" : "",
                    }}
                  >
                    Expense
                  </button>
                  <button
                    onClick={toggled}
                    className="flex w-1/2 justify-center"
                    style={{
                      background: inActive ? "green" : "",
                    }}
                  >
                    Income
                  </button>
                </div>
                <div className="border rounded-2xl px-4 py-2">
                  <p>Amount</p>
                  <input
                    type="text"
                    placeholder="$ 00.000"
                    className=" bg-white w-4/5"
                  />
                </div>
                <div className="">
                  <p>Category</p>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      Find or choose category
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-60"
                    >
                      <div className="flex flex-col gap-5 w-60">
                        <div className="flex gap-5">
                          <p className=" bg-blue-600 w-6 h-6 rounded-xl text-center text-xl text-white">
                            +
                          </p>
                          <p>Add Record</p>
                        </div>
                        <div className="border-b"></div>

                        {CategoryImgData.map((el) => {
                          return (
                            <div className="flex gap-4 cursor-pointer">
                              <p>{el.img}</p>
                              <p>{el.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p>Date</p>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                  <div>
                    <p>Date</p>
                    <input type="time" id="appt" name="appt" value="19:00" />
                  </div>
                </div>
                <button
                  className=""
                  style={{ background: activeButton ? "green" : "blue" }}
                >
                  Add Record
                </button>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <p>Payee</p>
                <select name="" id="" className="px-4 py-2 rounded-2xl">
                  <option value="">Write here</option>
                </select>
                <p>Note</p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
