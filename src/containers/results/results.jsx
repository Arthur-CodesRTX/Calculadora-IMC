import ResultsHeroText from "../../components/Results-HeroText";
import ResultsSummaryButtons from "../../components/Results-SummaryButtons";

function Results() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1E3A4A] via-[#2E4750] to-[#303841] font-Montserrat flex flex-col justify-start items-center">
      <ResultsHeroText />
      <ResultsSummaryButtons />
    </div>
  );
}

export default Results;
