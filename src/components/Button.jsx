import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  const handleCalculate = (e) => {
    e.preventDefault();
    navigate("./results", { replace: true });
  };

  return (
    <button
      type="submit"
      className="bg-linear-to-b from-[#F6C90E] to-[#F7CE24] opacity-100 rounded-2xl px-16 py-3 cursor-pointer w-fit text-2xl font-bold text-[#2E4750] hover:shadow-[0_0_15px_rgba(256,256,256,0.3)] transition ease-in-out duration-200 "
      onClick={handleCalculate}
    >
      Enviar
    </button>
  );
}

export default Button;
