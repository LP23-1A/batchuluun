import NavLog from "@/components/icon/NavLogo";
import { useRouter } from "next/router";
import Menu from "./icon/Menu";
import { useState } from "react";
import ResMenu from "./ResMenu";
import Close from "./icon/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between py-8 z-50">
      <div className="w-4 h-4 items-center ">
        <NavLog />
      </div>
      <div className="hidden max-sm:flex max-sm:">
        <button onClick={() => setOpen(!open)}>
          {open === false ? <Menu /> : <Close />}
        </button>
        {open && <ResMenu setOpen={setOpen} />}
      </div>

      <div className="py-2 max-sm:hidden">
        <input
          type="text"
          placeholder="search"
          className="border-2 border-none rounded bg-slate-100 w-32 px-3"
        />
      </div>
    </div>
  );
}
