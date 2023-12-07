import Trend from "@/components/Trend";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="w-[1920px] m-auto box-border">
      <section className="px-[350px]">
        <Navbar />
      </section>
      <section className="px-[350px] ">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-2xl">Trending</h2>
          </div>
          <Trend />
        </div>
      </section>
      <section className="px-[350px]">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl">All Blog Post</h2>
            <div className="flex justify-between">
              <ul className="flex gap-5">
                <li className=" text-yellow-400">All</li>
                <li>Design</li>
                <li>Travel</li>
                <li>Fashion</li>
                <li>Technology</li>
                <li>Branding</li>
              </ul>
              <p>view All</p>
            </div>
            <div className="flex">
              <Blog />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-[350px] mt-10">
        <div className="py-16 ">
          <Footer />
        </div>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
