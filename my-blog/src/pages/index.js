import BlogData from "@/components/BLog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendData from "@/components/Trend";

export default function Home() {
  return (
    <div className=" flex flex-col w-[1920px] m-auto box-border gap-24">
      <section className="px-[350px]">
        <Navbar />
      </section>
      <section className="px-[350px]">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-2xl">Trending</h2>
          </div>
          <TrendData />
        </div>
      </section>
      <section className="px-[350px]">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl">All Blog Post</h2>
            <div className="flex gap-12">
              <BlogData />
            </div>
          </div>
        </div>
      </section>
      <section className="px-[350px]">
        <Footer />
      </section>
    </div>
  );
}
