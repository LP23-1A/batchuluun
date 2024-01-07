import Geld from "@/components/Geld";
import Money from "@/components/Money";

export default function Step() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-12 w-screen pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul class="steps">
            <li class="step step-primary">Currency</li>
            <li class="step">Balance</li>
            <li class="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col m-auto items-center gap-7 w-96">
        <Money />
        <p>Select base currency</p>
        <div className="">
          <select className="pr-32 py-2 pl-16 rounded">
            <option value={1}>MNT-Mongolian Tugrik</option>
            <option value={2}>USA-American Dollar</option>
          </select>
        </div>
        <p>
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <button className="btn btn-primary px-40 py-4">Confirm</button>
      </div>
    </div>
  );
}
