import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <section className="w-[1920px] flex flex-col gap-28 m-auto max-sm:w-[800px] max-sm:px-10 max-sm:mx-auto box-border">
      <div className="px-[350px] max-sm:px-20">
        <Navbar />
      </div>
      <div className="px-[350px] m-auto max-sm:px-0">
        <ContactUs />
      </div>
      <div className="px-[350px] max-sm:px-0 mx-auto">
        <Footer />
      </div>
    </section>
  );
}
