import Trend from "@/components/Trend";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="w-[1920px] m-auto px-[350px]">
      <section>
        <Navbar />
      </section>
      <section>
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-2xl">Trending</h2>
          </div>
          <Trend />
        </div>
      </section>
      <section>
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

          <Blog />
        </div>
      </section>
    </div>
  );
}
