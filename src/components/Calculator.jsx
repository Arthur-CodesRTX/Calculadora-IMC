import InputGroup from "./InputGroup";
import InputActivity from "./InputActivity";
import InputGen from "./InputGen";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

function Calculator() {
  return (
    <section className="border-[#F6C90E] border-solid border-2 flex flex-col text-[#f7f7f7] rounded-2xl  bg-linear-to-b from-[#282E36]/50 via-[#2C333B]/50 to-[#303841]/50  p-8 shadow-[0_0_15px_rgba(256,256,256,0.1)]">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col w-full">
          <InputGroup
            labelText={"Digite sua idade"}
            name={"inputAge"}
            id={"inputAge"}
            type={"text"}
            placeholder={"Ex: 17"}
          />
          <span className="font-extralight text-sm text-transparent w-full mb-1 cursor-default">
            <FontAwesomeIcon icon={faCircleExclamation} /> Digite novamente
          </span>

          <InputGroup
            labelText={"Digite sua altura (cm)"}
            name={"inputHeight"}
            id={"inputHeight"}
            type={"text"}
            placeholder={"Ex: 180"}
          />
          <span className="font-extralight text-sm text-transparent w-full mb-1 cursor-default">
            <FontAwesomeIcon icon={faCircleExclamation} /> Digite novamente
          </span>

          <InputGroup
            labelText={"Digite seu peso (kg)"}
            name={"inputWeight"}
            id={"inputWeight"}
            type={"text"}
            placeholder={"Ex: 70"}
          />
          <span className="font-extralight text-sm text-transparent w-full mb-1 cursor-default">
            <FontAwesomeIcon icon={faCircleExclamation} /> Digite novamente
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
              value={"low"}
            />

            <InputActivity
              type={"radio"}
              name={"inputActivity"}
              id={"activity-medium"}
              labelText={"Regularmente"}
              value={"medium"}
            />

            <InputActivity
              type={"radio"}
              name={"inputActivity"}
              id={"activity-high"}
              labelText={"Intensa"}
              value={"high"}
            />
          </div>
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
            />
            <InputGen
              value={"female"}
              type={"radio"}
              name={"inputGen"}
              id={"inputFemale"}
              gen={<FontAwesomeIcon icon={faPersonDress} />}
            />
          </div>
        </div>

        <Button />
      </form>
    </section>
  );
}

export default Calculator;
