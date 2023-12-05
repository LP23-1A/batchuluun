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
        <Trend />
      </section>
      <section>
        <Blog />
      </section>
    </div>
  );
}
