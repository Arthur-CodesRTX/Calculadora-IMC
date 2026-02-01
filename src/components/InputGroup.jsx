const InputGroup = ({ labelText, id, type, name, placeholder }) => {
  return (
    <label className="font-normal text-md w-full" htmlFor={id}>
      <p className="[text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">{labelText}</p>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="bg-[#6A7C82]/25 rounded-2xl py-1.5 px-4 my-1 border-[#B1BABD] border-2 backdrop-blur-2xl border-solid text-sm font-normal focus:outline-none w-full focus-within:bg-[#55636A] transition ease-in-out duration-200"
      />
    </label>
  );
};

export default InputGroup;
