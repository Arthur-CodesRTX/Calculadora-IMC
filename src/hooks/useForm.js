import { useLocation } from "react-router-dom";

export default function useForm(){


    const location = useLocation();

    const dados = location.state;

    if (!dados) {
    return {
      taxaMetabolicaTotal: 0,
      type: "Carregando...",
      message: "Dados não encontrados.",
      imc: 0
    };
  }

    const { inputWeight, inputHeight, inputAge, inputGen, inputActivity } = dados;

    console.log(inputActivity, inputAge)

    const weight = Number(inputWeight);
    const age = Number(inputAge);
    const activity = Number(inputActivity);
    const height = Number(inputHeight);
    

    let taxaMetabolicaTotal = 0;
    let imc = weight / (height*height);

    if(inputGen !== "female"){
        taxaMetabolicaTotal = ((13.75 * weight)+(5 * height)-(6.75 * age) + 66.5)  * activity
    } else{
        taxaMetabolicaTotal = ((9.56 * weight)+(1.85 * height)-(4.68 * age) + 66.71)  * activity
    };

    const messagesImc = {
    magreza: `Seu IMC indica que você está abaixo do peso ideal. É importante ter atenção à sua nutrição para garantir que seu corpo receba a energia necessária.  Seu gasto calórico diário é de ${taxaMetabolicaTotal} calorias. Se o seu objetivo for ganhar peso de forma saudável, você deve consumir mais calorias do que esse valor diariamente.`,
    normal: `Seu IMC indica que você está em sua faixa de peso ideal. Parabéns! Manter-se nessa categoria é um excelente sinal de que seu equilíbrio entre alimentação e atividade física está funcionando.  Seu gasto calórico diário é de ${taxaMetabolicaTotal} calorias. Para manter o seu peso atual, tente consumir uma quantidade de calorias próxima a esse valor, mantendo o foco na qualidade dos alimentos e na constância dos exercícios.`,
    sobrepeso: `Seu IMC indica que você está na categoria de sobrepeso. Este é um momento oportuno para avaliar seus hábitos e prevenir possíveis riscos à saúde a longo prazo.  Seu gasto calórico diário é de ${taxaMetabolicaTotal} calorias. Se o seu objetivo for reduzir o peso de forma sustentável, o ideal é consumir um pouco menos de calorias do que esse valor diariamente, combinando isso a uma rotina de atividades físicas.`,
    obesidade: `Seu IMC indica um quadro de obesidade. É recomendável buscar orientação de profissionais de saúde para traçar um plano seguro de reeducação alimentar e exercícios, visando melhorar sua disposição e longevidade.  Seu gasto calórico diário é de ${taxaMetabolicaTotal} calorias. Para iniciar um processo de perda de peso saudável, você deve consumir menos calorias do que esse valor total, focando em escolhas alimentares mais naturais e nutritivas.`,
  };

    const typesImc = {
    Magreza: "Magreza",
    Normal: "Normal",
    Sobrepeso: "Sobrepeso",
    Obesidade: "Obesidade"
  };

    let type, message;


    switch(true){
        case imc <= 18.5:
            [type, message] = [typesImc.Magreza, messagesImc.magreza ];
            break;
        case imc < 24.9 && imc > 18.5:
            [type, message] = [typesImc.Normal, messagesImc.normal ];
            break;
        case imc < 29.9 && imc > 24.9:
            [type, message] = [typesImc.Sobrepeso, messagesImc.sobrepeso ];
            break;
        case imc < 40.0 && imc > 29.9:
            [type, message] = [typesImc.Obesidade, messagesImc.obesidade ];
            break;
    }

    return{
        taxaMetabolicaTotal,
        type,
        message,
        imc: imc.toFixed(1)
    }
}

