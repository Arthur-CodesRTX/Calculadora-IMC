const InputActivity = ({ labelText, name, type, id, value }) => {
  return (
    <label
      htmlFor={"activity-" + value}
      className="font-sm font-normal text-[#B1BABD] py-4 px-6 hover:bg-[#55636A] cursor-pointer w-full h-full rounded-4xl transition ease-in-out duration-200"
    >
      {labelText}
      <input type={type} name={name} id={id} hidden />
    </label>
  );
};

export default InputActivity;
