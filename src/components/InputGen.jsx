const InputGen = ({ value, type, id, name, gen }) => {
  return (
    <label
      htmlFor={value}
      className="w-8 h-8 bg-[#6A7C82]/25 rounded-4xl border-2 border-solid border-[#B1BABD] flex items-center justify-center cursor-pointer p-5 hover:bg-[#55636A] text-lg transition ease-in-out duration-200 has-checked:bg-indigo-500"
    >
      <input type={type} name={name} id={id} className="hidden" />
      {gen}
    </label>
  );
};

export default InputGen;
