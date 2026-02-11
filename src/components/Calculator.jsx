import InputGroup from "./InputGroup";
import InputActivity from "./InputActivity";
import InputGen from "./InputGen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [formData, setFormData] = useState({
    inputAge: "",
    inputHeight: "",
    inputWeight: "",
    inputActivity: "",
    inputGen: "",
  });

  const [errors, setErrors] = useState({
    inputAge: false,
    inputHeight: false,
    inputWeight: false,
    inputActivity: false,
    inputGen: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  const handleCalculate = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((chave) => {
      const valor = formData[chave];

      if(chave === "inputAge" || chave === "inputHeight" || chave === "inputWeight"){
        if(valor.trim() === "" || valor.trim().length > 3){
        newErrors[chave] = true;
        } else{
        newErrors[chave] = false;
        }
      } else{
        newErrors[chave] = valor.trim() === "";
      }
      
      
    });

    setErrors(newErrors);

    const temErro = Object.values(newErrors).includes(true);

    if (!temErro) {
      navigate("./results", { replace: true, state: formData });
    }
  };
  
  console.log(errors);

  return (
    <section className="border-[#F6C90E] border-solid border-2 flex flex-col text-[#f7f7f7] rounded-2xl  bg-linear-to-b from-[#282E36]/50 via-[#2C333B]/50 to-[#303841]/50  px-12 py-8 shadow-[0_0_15px_rgba(256,256,256,0.1)]">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col w-full">
          <InputGroup
            labelText={"Digite sua idade"}
            name={"inputAge"}
            id={"inputAge"}
            type={"number"}
            placeholder={"Ex: 17"}
            onChange={handleChange}
          />
          <span
            className={`font-extralight text-sm ${errors.inputAge ? "text-red-400" : "text-transparent"} w-full pb-3 pt-1 cursor-default transition duration-300 ease-in-out`}
          >
            <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório (máx. 3 dígitos)
          </span>

          <InputGroup
            labelText={"Digite sua altura (cm)"}
            name={"inputHeight"}
            id={"inputHeight"}
            type={"number"}
            placeholder={"Ex: 180"}
            onChange={handleChange}
          />
          <span
            className={`font-extralight text-sm ${errors.inputHeight ? "text-red-400" : "text-transparent"} w-full pb-3 pt-1 cursor-default transition duration-300 ease-in-out`}
          >
            <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório (máx. 3 dígitos)
          </span>

          <InputGroup
            labelText={"Digite seu peso (kg)"}
            name={"inputWeight"}
            id={"inputWeight"}
            type={"number"}
            placeholder={"Ex: 70"}
            onChange={handleChange}
          />
          <span
            className={`font-extralight text-sm ${errors.inputWeight ? "text-red-400" : "text-transparent"} w-full pb-3 pt-1 cursor-default transition duration-300 ease-in-out`}
          >
            <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório (máx. 3 dígitos)
          </span>
        </div>

        <div className="flex flex-col">
          <h2 className="py-2 [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">
            Marque seu nível de atividade física
          </h2>

          <div className="flex items-center bg-[#6A7C82]/25  justify-center w-full rounded-4xl border-[#B1BABD] border-solid border-2">
            <InputActivity
              type={"radio"}
              name={"inputActivity"}
              id={"activity-low"}
              labelText={"Baixa"}
              value={"1.2"}
              onChange={handleChange}
            />

            <InputActivity
              type={"radio"}
              name={"inputActivity"}
              id={"activity-medium"}
              labelText={"Moderada"}
              value={"1.5"}
              onChange={handleChange}
            />

            <InputActivity
              type={"radio"}
              name={"inputActivity"}
              id={"activity-high"}
              labelText={"Intensa"}
              value={"1.7"}
              onChange={handleChange}
            />
          </div>

          <span
            className={`font-extralight text-sm ${errors.inputActivity ? "text-red-400" : "text-transparent"} w-full pb-3 pt-1 cursor-default transition duration-300 ease-in-out`}
          >
            <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório
          </span>
        </div>

        <div className="flex flex-col w-full gap-2">
          <h2 className="[text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">
            Marque seu Gênero
          </h2>

          <div className="flex gap-4 w-full">
            <InputGen
              value={"male"}
              type={"radio"}
              name={"inputGen"}
              id={"inputMale"}
              gen={<FontAwesomeIcon icon={faPerson} />}
              onChange={handleChange}
            />
            <InputGen
              value={"female"}
              type={"radio"}
              name={"inputGen"}
              id={"inputFemale"}
              gen={<FontAwesomeIcon icon={faPersonDress} />}
              onChange={handleChange}
            />
          </div>

          <span
            className={`font-extralight text-sm ${errors.inputGen ? "text-red-400" : "text-transparent"} w-full pb-3 pt-1 cursor-default transition duration-300 ease-in-out`}
          >
            <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório
          </span>
        </div>

        <button
          type="submit"
          className="bg-linear-to-b from-[#F6C90E] to-[#F7CE24] opacity-100 rounded-2xl px-16 py-3 cursor-pointer w-fit text-2xl font-bold text-[#2E4750] hover:shadow-[0_0_15px_rgba(256,256,256,0.3)] transition ease-in-out duration-200 "
          onClick={handleCalculate}
          formData={formData}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Calculator;
// provavelmente vou ter que criar um useState usando existsError
