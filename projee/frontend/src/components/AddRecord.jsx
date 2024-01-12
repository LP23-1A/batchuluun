import Leading from "@/icon/Leading";

export default function AddCard({ closeModal }) {
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
          <input type="checkbox" class="toggle" />
          <div className="border bg-white rounded-xl p-3">
            <p className="font-bold">Amount </p>
            <p>$ 000.00</p>
          </div>
          <div>
            <p>Category</p>
            <div className="border p-3 rounded-xl flex justify-between">
              <details class="dropdown">
                <summary class="m-1 btn">open or close</summary>
                <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
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
                value="2024-01-11"
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
    </div>
  );
}
