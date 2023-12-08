import NavLog from "@/icon/NavLogo";

export default function Navbar() {
  return (
    <div className="flex justify-between py-8">
      <div className="w-4 h-4 items-center ">
        <NavLog />
      </div>
      <div className="text-center">
        <ul className="flex gap-10 text-center items-center">
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="py-2">
        <input
          type="text"
          placeholder="search"
          className="border-2 border-none rounded bg-slate-100 w-32"
        />
      </div>
    </div>
  );
}
