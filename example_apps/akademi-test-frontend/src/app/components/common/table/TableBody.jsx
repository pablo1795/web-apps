import PropTypes from "prop-types";

const TableBody = ({ pageData }) => (
  <tbody>
    {pageData.length ? (
      pageData.map((rowData, index) => (
        <tr className="hover:bg-stone-800 transition-colors group border-t-2 border-solid border-stone-900" key={index}>
          <td className="text-stone-300 px-4">
            {index + 1}
          </td>
          {rowData.map((data, i) => (
            <td className="text-stone-300 px-4" key={i}>
              {data || "-"}
            </td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td className="text-stone-100 py-2">No hay datos para mostrar.</td>
      </tr>
    )}
  </tbody>
);

TableBody.propTypes = {
  pageData: PropTypes.array.isRequired,
};

export default TableBody;