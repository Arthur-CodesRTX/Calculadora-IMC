import HeroText from "../../components/HeroText";
import Calculator from "../../components/Calculator";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1E3A4A] via-[#2E4750] to-[#303841] font-Montserrat flex flex-col ">
      <main className="flex-1 flex justify-center items-start h-screen px-10 my-12">
        <HeroText />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
