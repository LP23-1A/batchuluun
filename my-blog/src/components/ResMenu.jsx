import { useRouter } from "next/router";

export default function ResMenu() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact");
  };
  const home = () => {
    router.push("/");
  };
  const blog = () => {
    router.push("/allblog");
  };
  return (
    <div className="text-center max-sm:hidden z-30 bg-slate-500">
      <ul className="flex gap-10 text-center items-center">
        <button onClick={home}>Home</button>
        <button onClick={blog}>Blog</button>
        <button onClick={contact}>Contact</button>
      </ul>
    </div>
  );
}
