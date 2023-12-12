import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <section className="w-[1920px] flex flex-col gap-28 m-auto">
      <div className="px-[350px]">
        <Navbar />
      </div>
      <div className="px-350px] m-auto">
        <ContactUs />
      </div>
      <div className="px-[350px]">
        <Footer />
      </div>
    </section>
  );
}
