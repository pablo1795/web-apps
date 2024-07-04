import PropTypes from "prop-types";

function Text({
  as = "p",
  color = "text-stone-100",
  disabled = false,
  text = "",
  styles = "",
  ...restProps
}) {
  const Component = as;
  return (
    <Component className={`${disabled ? 'text-stone-500' : color} ${styles}`} {...restProps}>
      {text}
    </Component>
  );
}

Text.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Text;
