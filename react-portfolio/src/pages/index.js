import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skills";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Skill />
    </div>
  );
}
