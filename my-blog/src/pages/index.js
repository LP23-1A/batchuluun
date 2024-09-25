"use client";
import BlogData from "@/components/BLog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrendData from "@/components/Trend";

export default function Home() {
  return (
    <div>
      <div className="px-20 flex flex-col w-full m-auto box-border gap-24 ">
        <section className=" max-sm:px-10">
          <Navbar />
        </section>
        <section className=" max-sm:px-[10px]">
          <div className="flex flex-col gap-10">
            <Hero />
          </div>
        </section>
        <section className=" max-sm:px-0 max-sm:mx-auto">
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="text-2xl max-sm:text-center">Trending</h2>
            </div>
            <TrendData />
          </div>
        </section>
        <section className=" max-sm:px-0 max-sm:mx-auto">
          <div className="flex flex-col gap-24 max-sm:mx-auto">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl max-sm:text-center">All Blog Post</h2>
              <div className="flex gap-12">
                {" "}
                <BlogData />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-10 max-sm:mx-auto bg-slate-100 py-16 max-sm:px-[190px]">
        <Footer />
      </section>
    </div>
  );
}
