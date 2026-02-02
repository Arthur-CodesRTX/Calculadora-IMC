function ResultsHeroText() {
  return (
    <main className="flex items-center flex-col gap-y-8">
      <h1 className="text-5xl py-12">
        <span className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          <span className="text-5xl bg-linear-to-b from-[#F6C90E] to-[#F7E083] bg-clip-text text-transparent font-bold">
            Resultado da sua avaliação
          </span>
        </span>
      </h1>
      <section className="flex justify-around gap-12 [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">
        <article className="flex flex-col bg-linear-to-b from-[#1E3A4A] to-[#2F4049] rounded-2xl gap-4 py-12 text-white justify-start items-center w-90 shadow-[0_0_15px_rgba(256,256,256,0.1)]">
          <h2 className="text-2xl font-bold">Seu IMC</h2>
          <span className="text-6xl font-bold">{} 17</span>
          <p className="bg-linear-to-r from-[#f5d03b] to-[#F6C90E] text-2xl rounded-4xl text-[#303841] font-bold px-3 py-2 text-shadow-none">
            {} Magreza
          </p>
        </article>
        <article className="flex flex-col bg-linear-to-b from-[#1E3A4A] to-[#2F4049] rounded-2xl gap-4 py-12 text-white justify-start items-center w-90 shadow-[0_0_15px_rgba(256,256,256,0.1)]">
          <h2 className="text-2xl font-bold">Gasto Calórico Diário</h2>
          <span className="text-6xl font-bold">
            {} 2150 <span className="text-4xl">kcal</span>
          </span>
        </article>
      </section>

      <div className="w-full h-6 bg-[#273946] rounded-xl text-white text-xl">
        <div className="w-50 h-6 bg-[#F6C90E] rounded-xl"></div>
        <span>Magreza</span>
        <span>Normal</span>
        <span>Sobrepeso</span>
        <span>Obesidade</span>
      </div>
    </main>
  );
}

export default ResultsHeroText;
