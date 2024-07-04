import PropTypes from "prop-types";
import Text from "../Text";

// Components
import Button from "../Button";

function TablePagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center gap-4">
      <Button
        disabled={currentPage === 1}
        icon="◀"
        onClick={() => onPageChange(currentPage - 1)}
        text="anterior"
        title="pagina anterior"
      />

      <Text text={`pagina ${currentPage} / ${totalPages}`} />

      <Button
        disabled={currentPage === totalPages}
        icon="▶"
        onClick={() => onPageChange(currentPage + 1)}
        text="siguiente"
        title="siguiente pagina"
      />
    </div>
  );
}

TablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default TablePagination;