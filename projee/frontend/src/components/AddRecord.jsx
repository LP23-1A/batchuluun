import Leading from "@/icon/Leading";

export default function AddCard({ closeModal }) {
  return (
    <div className="w-[792px] bg-white rounded-xl p-5">
      <div className="flex justify-between">
        <p>Add Card</p>
        <button
          className="text-2xl cursor-pointer"
          onClick={() => closeModal(add)}
        >
          x
        </button>
      </div>
      <div className="border-b "></div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <input type="checkbox" class="toggle" checked />
          <div className=" bg-white border rounded-xl ">
            <p className="font-bold">Amount</p>
            <p>$ 000.00</p>
          </div>
          <div className="w-1/2">
            <p>Category</p>
            <div className="flex justify-between border p-3 rounded-xl ">
              <input type="text" placeholder="Choose" />
              <Leading />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <p>Date</p>
              <input type="date" value="2024-01-11" />
            </div>
            <div>
              <p>Date</p>
              <input type="time" value="14:00" />
            </div>
          </div>
          <button className=" btn btn-primary">Add Card</button>
        </div>
        <div>
          <div>
            <p>Payee</p>
            <input
              type="text"
              placeholder="Write here"
              className="border rounded-xl"
            />
          </div>
          <div>
            <p>Note</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
