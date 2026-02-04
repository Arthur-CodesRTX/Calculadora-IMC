import HeroText from "../../components/HeroText";
import Calculator from "../../components/Calculator";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1E3A4A] via-[#2E4750] to-[#303841] font-Montserrat flex items-start p-12 h-screen flex-row">
      <HeroText />
      <Calculator />
    </div>
  );
}

export default Home;
