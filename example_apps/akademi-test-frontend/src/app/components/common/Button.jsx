import Text from "./Text";

function Button({
  disabled = false,
  icon,
  onClick,
  text = "",
  title = "",
  type = "button",
}) {
  return (
    <button
      className={`${disabled ? "bg-stone-800" : "bg-stone-700 hover:bg-stone-600"} px-2 py-1 flex gap-1`}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {icon && <span>{icon}</span>}
      <Text text={text} disabled={disabled} styles="font-bold lowercase" />
    </button>
  )
}

export default Button;
