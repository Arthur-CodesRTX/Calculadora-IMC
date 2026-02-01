function ResultsHeroText() {
  return (
    <main>
      <h1 className="text-5xl font-bold">
        <span className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          <span className="text-5xl bg-linear-to-b from-[#F6C90E] to-[#F7E083] bg-clip-text text-transparent font-medium">
            Resultado da sua avaliação
          </span>
        </span>
      </h1>
      <section className="flex">
        <article className="flex flex-col bg-linear-to-b from-[#1E3A4A] to-[#2F4049]">
          <h2>Seu IMC</h2>
          <span>{}</span>
          <p>{}</p>
        </article>
        <article className="flex flex-col bg-linear-to-b from-[#1E3A4A] to-[#2F4049]">
          <h2>Gasto Calórico Diário</h2>
          <span>{} kcal</span>
        </article>
      </section>
    </main>
  );
}

export default ResultsHeroText;
