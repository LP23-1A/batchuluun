import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClickDashboard = () => {
    setActive(true);
  };
  const handleClickRecord = () => {
    setActive(!active);
  };
  return (
    <div className=" px-32 py-4 flex justify-between">
      <div className="flex gap-6 items-center">
        <Logo />
        <a href="/dashboard" onClick={handleClickDashboard} style={{color:active ? "gray" : "black"}}>dashboard</a>
        <a href="/record" onClick={handleClickRecord} style={{color:active ? "gray" : "black"}}>Record</a>
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
