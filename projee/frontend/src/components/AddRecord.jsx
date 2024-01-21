import { useEffect, useState } from "react";
import axios from "axios";
export default function AddCard() {
  const [exActive, setExActive] = useState(true);
  const [activeButton, setActiveButton] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const api = "http://localhost:8000/transactions";
  const categoryApi = "http://localhost:8000/categorys";
  const handler = async () => {
    const data = await axios.get(categoryApi);
    setData(data.data);
  };
  useEffect(() => {
    handler();
  });
  const toggled = () => {
    setExActive(!exActive);
    setActiveButton(!activeButton);
  };
  const handlerRecord = async () => {
    try {
      const response = await axios.post(api, {
        user_id: user.id,
        name: name,
        amount: exActive ? -amount : amount,
        transaction_type: exActive ? "INC" : "EXP",
        description: description,
      });
      console.log(user_id);

      setName("");
      setAmount("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <button
        className="btn  btn-primary w-full"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        + Add
      </button>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box bg-white w-[792px] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <p>Add Record</p>
            <div className="border-b"></div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col gap-4">
                <div
                  className="border rounded-2xl flex items-center "
                  onClick={toggled}
                >
                  <button
                    className="flex items-center w-1/2 justify-center rounded-xl p-1"
                    style={{
                      background: exActive ? "blue" : "",
                    }}
                  >
                    Expense
                  </button>
                  <button
                    className="flex w-1/2 justify-center rounded-xl p-1"
                    style={{
                      background: exActive ? "" : "green",
                    }}
                  >
                    Income
                  </button>
                </div>
                <div className="border rounded-2xl px-4 py-2">
                  <p>Amount</p>
                  <input
                    type="text"
                    value={amount}
                    placeholder="$ 00.000"
                    className=" bg-white w-4/5"
                    onChange={(el) => setAmount(el.target.value)}
                  />
                </div>
                <div className="">
                  <p>Category</p>
                  <select
                    name=""
                    id=""
                    value={name}
                    onChange={(el) => setName(el.target.value)}
                    className="border rounded-xl p-2"
                  >
                    <option value="">Find or choose category</option>

                    {data.map((el, ind) => {
                      return <option key={ind}>{el.name}</option>;
                    })}
                  </select>
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
                      className="border rounded-xl p-1"
                    />
                  </div>
                  <div>
                    <p>Date</p>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      value="19:00"
                      className="border rounded-xl p-1"
                    />
                  </div>
                </div>
                <button
                  className="rounded-xl py-2"
                  style={{ background: activeButton ? "green" : "blue" }}
                >
                  Add Record
                </button>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <p>Payee</p>
                <input
                  type="text"
                  placeholder="write here"
                  className="border p-3 rounded-xl bg-slate-200"
                />
                <p>Note</p>
                <textarea
                  name=""
                  id=""
                  placeholder="write here"
                  className="border p-3 h-52 rounded-xl bg-slate-200"
                  onChange={(el) => setDescription(el.target.value)}
                ></textarea>
              </div>
              <p onClick={handlerRecord}>hh</p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
