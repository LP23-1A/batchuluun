import Trend from "@/components/Trend";
import Blog from "@/components/Blog";
export default function Home() {
  return (
    <div>
      <section>
        <Trend />
      </section>
      <section>
        <Blog />
      </section>
    </div>
  );
}
