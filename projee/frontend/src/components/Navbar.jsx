import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";
import { useState } from "react";
import Button from "./Button";
import Button1 from "./Button1";

export default function Navbar() {
  const [active, setActive] = useState(true);
  const handleClickDashboard = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className=" px-32 py-4 flex justify-between w-[1440px] m-auto">
        <div className="flex gap-6 items-center" onClick={handleClickDashboard}>
          <Logo />
          <a href="/dashboard" style={{ color: active ? "black" : "gray" }}>
            dashboard
          </a>
          <a href="/record" style={{ color: active ? "gray" : "black" }}>
            Record
          </a>
        </div>
        <div className="flex gap-6">
          <Button1>+ Record</Button1>
          <Profile />
        </div>
      </div>
    </div>
  );
}
