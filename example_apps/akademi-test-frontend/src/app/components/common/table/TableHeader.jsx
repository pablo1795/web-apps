import PropTypes from "prop-types";

const TableHeader = ({ columns }) => (
  <thead className="bg-stone-800">
    <tr>
    <th className="text-stone-100 py-2 uppercase">N°</th>
      {columns.map((headerCell, index) => (
        <th className="text-stone-100 py-2 uppercase" key={index}>
          {headerCell}
        </th>
      ))}
    </tr>
  </thead>
);

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default TableHeader;
