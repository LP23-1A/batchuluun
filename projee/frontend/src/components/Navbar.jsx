import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";

export default function Navbar() {
  return (
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
  );
}
