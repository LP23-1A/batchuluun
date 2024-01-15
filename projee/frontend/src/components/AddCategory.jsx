import { useState } from "react";
const api = "http://localhost:8000/users/user/category";

export default function AddCategoryInput({ closeCategoryModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const handlerInput = async () => {
    let res = await axios.post(api, { name: name, description: description });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          className="border p-1"
          onChange={(el) => setName(el.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(el) => setDescription(el.target.value)}
        />
        <button onClick={handlerInput}>Add</button>
      </div>
      <p className=" cursor-pointer" closeCategoryModal={false}>
        x
      </p>
    </div>
  );
}
