const InputGen = ({ value, type, id, name, gen }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="sr-only peer"
      />
      <label
        htmlFor={id}
        className="w-8 h-8 bg-[#6A7C82]/25 rounded-4xl border-2 border-solid border-[#B1BABD] flex items-center justify-center cursor-pointer p-5 hover:bg-[#55636A] text-2xl transition ease-in-out duration-200 peer-checked:bg-[#55636A]"
      >
        {gen}
      </label>
    </div>
  );
};

export default InputGen;
