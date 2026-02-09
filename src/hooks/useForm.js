import { useLocation } from "react-router-dom";

export default function useForm(){

    const location = useLocation();

    const dados = location.state;

    const { inputWeight, inputHeight, inputAge, inputGen, inputActivity } = dados;

    const weight = Number(inputWeight);
    const age = Number(inputAge);
    const activity = Number(inputActivity);
    const height = Number(inputHeight);
    

    let taxaMetabolicaTotal = 0;
    let heightMeters = height / 100;
    let imc = weight / (heightMeters*heightMeters);

    if(inputGen !== "female"){
        taxaMetabolicaTotal = ((13.75 * weight)+(5 * height)-(6.75 * age) + 66.5)  * activity
    } else{
        taxaMetabolicaTotal = ((9.56 * weight)+(1.85 * height)-(4.68 * age) + 66.71)  * activity
    };

    const messagesImc = {
    magreza: `Seu IMC indica que você está abaixo do peso ideal. É importante ter atenção à sua nutrição para garantir que seu corpo receba a energia necessária.\n  Seu gasto calórico diário é de ${taxaMetabolicaTotal.toFixed(0)} calorias. Se o seu objetivo for ganhar peso de forma saudável, você deve consumir mais calorias do que esse valor diariamente.`,
    normal: `Seu IMC indica que você está em sua faixa de peso ideal. Parabéns! Manter-se nessa categoria é um excelente sinal de que seu equilíbrio entre alimentação e atividade física está funcionando.\n Seu gasto calórico diário é de ${taxaMetabolicaTotal.toFixed(0)} calorias. Para manter o seu peso atual, tente consumir uma quantidade de calorias próxima a esse valor, mantendo o foco na qualidade dos alimentos e na constância dos exercícios.`,
    sobrepeso: `Seu IMC indica que você está na categoria de sobrepeso. Este é um momento oportuno para avaliar seus hábitos e prevenir possíveis riscos à saúde a longo prazo.\n  Seu gasto calórico diário é de ${taxaMetabolicaTotal.toFixed(0)} calorias. Se o seu objetivo for reduzir o peso de forma sustentável, o ideal é consumir um pouco menos de calorias do que esse valor diariamente, combinando isso a uma rotina de atividades físicas.`,
    obesidade: `Seu IMC indica um quadro de obesidade. É recomendável buscar orientação de profissionais de saúde para traçar um plano seguro de reeducação alimentar e exercícios, visando melhorar sua disposição e longevidade.\n  Seu gasto calórico diário é de ${taxaMetabolicaTotal.toFixed(0)} calorias. Para iniciar um processo de perda de peso saudável, você deve consumir menos calorias do que esse valor total, focando em escolhas alimentares mais naturais e nutritivas.`,
  };

    const typesImc = {
    Magreza: "Magreza",
    Normal: "Normal",
    Sobrepeso: "Sobrepeso",
    Obesidade: "Obesidade"
  };

    let type, message;

    switch(true) {
    case imc <= 18.5:
        [type, message] = [typesImc.Magreza, messagesImc.magreza];
        break;
    case imc <= 24.9: // Não precisa testar o mínimo, pois o case anterior já pegou
        [type, message] = [typesImc.Normal, messagesImc.normal];
        break;
    case imc <= 29.9:
        [type, message] = [typesImc.Sobrepeso, messagesImc.sobrepeso];
        break;
    default: // Tudo acima de 29.9
        [type, message] = [typesImc.Obesidade, messagesImc.obesidade];
        break;
}

    return{
        taxaMetabolicaTotal: taxaMetabolicaTotal.toFixed(0),
        type,
        message,
        imc: imc.toFixed(1)
    }
}

