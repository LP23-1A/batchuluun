import NavLog from "@/components/icon/NavLogo";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact");
  };
  const home = () => {
    router.push("/index");
  };
  const blog = () => {
    router.push("/error");
  };
  return (
    <div className="flex justify-between py-8">
      <div className="w-4 h-4 items-center ">
        <NavLog />
      </div>
      <div className="text-center">
        <ul className="flex gap-10 text-center items-center">
          <button onClick={home}>Home</button>
          <button onClick={blog}>Blog</button>
          <button onClick={contact}>Contact</button>
        </ul>
      </div>
      <div className="py-2">
        <input
          type="text"
          placeholder="search"
          className="border-2 border-none rounded bg-slate-100 w-32 px-3"
        />
      </div>
    </div>
  );
}
