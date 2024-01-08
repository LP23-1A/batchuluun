import Cards from "@/components/Cards";
import Geld from "@/components/Geld";
import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";

export default function DashBoard() {
  return (
    <div className=" bg-white">
      <div className=" px-32 py-4 flex justify-between">
        <div className="flex gap-6 items-center">
          <Logo />
          <p>DashBoard</p>
          <p>Records</p>
        </div>
        <div className="flex gap-6">
          <button className="bg-indigo-800  text-lg px-6 rounded-3xl">
            + Record
          </button>
          <Profile />
        </div>
      </div>
      <div className=" bg-slate-200 px-32 pt-8 flex">
        <div className="w-96 h-[220px] bg-blue-800 flex flex-col gap-24 p-8 rounded-2xl">
          <Geld className="text-white" />
          <div>
            <p>Cash</p>
            <p className="text-white text-2xl">10,000,00</p>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}
