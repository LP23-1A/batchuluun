import { useState } from "react";
import axios from "axios";
const api = "http://localhost:8000/categorys";

export default function AddCategoryInput({ closeCategoryModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const handlerInput = async () => {
    let res = await axios.post(api, { name: name, description: description });
    console.log(res);
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
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <input
                type="text"
                value={name}
                onChange={(el) => setName(el.target.value)}
                placeholder="Name"
                className="p-1"
              />
              <input
                type="text"
                value={description}
                onChange={(el) => setDescription(el.target.value)}
              />
            </div>
            <button onClick={handlerInput} className="btn btn-primary w-80">
              Add category
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
