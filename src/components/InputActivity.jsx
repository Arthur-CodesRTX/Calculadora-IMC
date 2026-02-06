const InputActivity = ({ labelText, name, type, id, value, onChange }) => {
  return (
    <div className="w-full h-full">
      {/* 1. O input vem PRIMEIRO e fora do label (ou antes do conteúdo) */}
      <input
        type={type}
        name={name}
        id={id} // id deve bater com o htmlFor
        value={value}
        className="sr-only peer"
        onChange={onChange}
      />

      {/* 2. O label vem DEPOIS e usa peer-checked */}
      <label
        htmlFor={id}
        className="
          flex items-center justify-center
          font-sm font-normal text-[#B1BABD] 
          py-4 px-6 cursor-pointer w-full h-full rounded-4xl 
          transition ease-in-out duration-200
          border border-transparent
          hover:bg-[#55636A] 
          peer-checked:bg-[#55636A] 
        "
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputActivity;
