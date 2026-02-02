function HeroText() {
  return (
    <section className="text-left flex flex-col gap-12 my-10">
      <h1 className="text-5xl font-bold">
        <span className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          <span className="text-6xl bg-linear-to-b from-[#F6C90E] to-[#F7E083] bg-clip-text text-transparent font-bold">
            Transforme dados em resultados
          </span>
        </span>
      </h1>
      <p className="text-[#F7F7F7] text-4xl w-4/10 [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)] font-normal leading-snug">
        Descubra seu IMC e gasto calórico Total em segundos. Nossa calculadora
        inteligente analisa seu perfil físico e nível de atividade. <br />
        <b>Simples, preciso e visual.</b>
      </p>
    </section>
  );
}

export default HeroText;
