import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Text from "./Text";

function ButtonLink({
  disabled = false,
  href,
  icon,
  text = "",
  title = "",
}) {
  return (
    <Link
      className={`${disabled ? "bg-stone-800" : "bg-stone-700 hover:bg-stone-600"} px-2 py-1 flex gap-1`}
      title={title}
      to={href}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <Text text={text} disabled={disabled} styles="font-bold lowercase" />
    </Link>
  );
}

ButtonLink.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object
};

ButtonLink.defaultProps = {
  disabled: false,
  href: undefined,
  icon: undefined,
  style: {}
};

export default ButtonLink;
