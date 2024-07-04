function InputField(
  {
    label = "campo de texto",
    maxLength,
    min = 0,
    minLength,
    name = "",
    onChange,
    pattern,
    placeholder = "",
    required,
    title = "",
    type = "text",
    value,
  }
) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-stone-100">{label} {required && <span className="text-red-700 text-xl">*</span>}</label>
      <input
        className="bg-stone-800 text-stone-100 outline outline-1 outline-stone-600 px-2 py-1"
        id={name}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        title={title}
        type={type}
        value={value}
      />
    </div>
  );
}

export default InputField;
