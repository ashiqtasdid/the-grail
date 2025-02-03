import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import News from "@/components/News";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <News/>
      <div className="bg-[#252525] text-white">
      <FAQ/>
      </div>
      <Footer/>
    </main>
  );
}
