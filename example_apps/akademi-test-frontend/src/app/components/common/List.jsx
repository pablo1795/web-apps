import PropTypes from "prop-types";

function List({ dataList }) {
  return (
    <ul>
      {dataList.map((value, index) => (
        <li key={index} className="flex justify-between">
          <span className="text-stone-100">{value.title}:</span>
          <span className="text-stone-100">{value.text}</span>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default List;
