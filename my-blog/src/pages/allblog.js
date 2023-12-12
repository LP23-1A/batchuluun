import AllBlog from "@/components/AllBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AllBlogRender() {
  return (
    <div className="w-[1920px] flex flex-col gap-24 m-auto">
      <section className="px-[350px]">
        <Navbar />
      </section>
      <section className="px-[350px]">
        <AllBlog />
      </section>
      <section className="px-[350px]">
        <Footer />
      </section>
    </div>
  );
}
