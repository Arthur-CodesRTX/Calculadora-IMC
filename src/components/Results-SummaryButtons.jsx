import { useNavigate } from "react-router-dom";

function ResultsSummaryButtons() {
  const navigate = useNavigate();

  const recalculate = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <p className="bg-linear-to-b from-[#1E3A4A] to-[#33434b] rounded-[60px] py-4 px-8 text-white text-lg font-light text-center [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">
        Seu IMC indica que você está abaixo do peso ideal. É importante ter
        atenção à sua nutrição para garantir que seu corpo receba a energia
        necessária. <br />
        <br />
        Seu gasto calórico diário é de {} calorias. Se o seu objetivo for ganhar
        peso de forma saudável, você deve consumir mais calorias do que esse
        valor diariamente.
      </p>
      <div className="flex gap-8 font-bold text-2xl">
        <button
          type="submit"
          className="bg-linear-to-r from-[#f5d03b] to-[#F6C90E] rounded-4xl text-[#303841] px-3 py-3 text-shadow-none w-60 cursor-pointer hover:shadow-[0_0_15px_rgba(256,256,256,0.3)] transition ease-in-out duration-200 hover:border-black"
          onClick={recalculate}
        >
          Refazer cálculo
        </button>
        <button
          type="submit"
          className="border-2 border-white rounded-4xl px-3 py-3 text-white w-60 [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#2d3f4b] hover:shadow-[0_0_15px_rgba(256,256,256,0.3)] transition ease-in-out duration-200 "
          onClick={""}
        >
          Ver dicas
        </button>
      </div>
    </section>
  );
}

export default ResultsSummaryButtons;
