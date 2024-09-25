import AllBlog from "@/components/AllBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AllBlogRender() {
  return (
    <div className="w-[1920px] flex flex-col gap-24 m-auto max-sm:w-[600px] max-sm:px-10">
      <section className="px-[350px] max-sm:px-0">
        <Navbar />
      </section>
      <section className="px-[350px] max-sm:px-0 max-sm:flex max-sm:mx-auto">
        {/* <AllBlog /> */}
      </section>
      <section className="px-[350px] max-sm:px-0 mx-auto">
        <Footer />
      </section>
    </div>
  );
}
