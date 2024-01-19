import { useState } from "react";
import axios from "axios";
import { CategoryImgData } from "./CategoryImg";
import CategoryData from "./CategoryData";
const api = "http://localhost:8000/categorys";

export default function AddCategoryInput({ closeCategoryModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const user = JSON.parse(localStorage.getItem("id"));
  const handlerInput = async () => {
    let res = await axios.post(api, {
      name: name,
      description: description,
      user_id: user.id,
    });
  };
  return (
    <div>
      <button
        className="text-2xl text-black"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <span className="text-blue-300 text-2xl">+</span> Add category
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-2xl">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click
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

                    {CategoryImgData.map((el, ind) => {
                      return (
                        <div className="flex gap-4" key={ind}>
                          <p>{el.img}</p>
                          <p>{el.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </ul>
              </div>
              <input
                type="text"
                value={name}
                onChange={(el) => setName(el.target.value)}
                placeholder="Name"
                className="p-1"
              />
            </div>
            <input
              type="text"
              value={description}
              onChange={(el) => setDescription(el.target.value)}
            />
            <button onClick={handlerInput} className="btn btn-primary w-80">
              Add category
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
