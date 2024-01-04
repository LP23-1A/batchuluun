"use client";
import SignIn from "@/components/SignIn";

// import LogIn from "./components/LogIn";

export default function Home() {
  return (
    <section className=" bg-sky-700 h-full">
      <div className="w-1/2 bg-white  ">
        <SignIn />
      </div>
      <div className="w-1/2 bg-cyan-800"> </div>
    </section>
  );
}
