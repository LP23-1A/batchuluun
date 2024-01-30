import React from "react";
import Navbar from "../components/Navbar";
import LoginSection from "../components/LoginSection";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="flex flex-col gap-[60px] ">
      <Navbar />
      <div className="flex justify-center ">
        <LoginSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
