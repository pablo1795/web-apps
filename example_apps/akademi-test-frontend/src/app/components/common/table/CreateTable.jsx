import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import InputField from "../form/InputField";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import Text from "./../Text";

function CreateTable({ bodyData = [], headerData = [], title = "titulo tabla" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeRowsPerPage = (event) => {
    const value = parseInt(event.target.value, 10);
    setRowsPerPage(value);
    setCurrentPage(1);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage > 0 && newPage <= totalPages ? newPage : currentPage);
  };
  
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  useEffect(() => {
    const totalRows = bodyData.length;
    const newTotalPages = Math.ceil(totalRows / rowsPerPage);
    setTotalPages(newTotalPages);
  }, [bodyData, rowsPerPage]);

  const filteredData = bodyData.filter((value) =>
    value.some((data) => String(data).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.length || searchTerm.length ? filteredData.slice(startIndex, endIndex) : bodyData.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col gap-4">
      <InputField
        onChange={handleSearchTerm}
        placeholder={`buscar de ${title}`}
        value={searchTerm}
        label='buscador'
      />

      <div className="">
        {
          (headerData.length > 0 && bodyData.length > 0) ?
            <table className="w-full table-auto">
              <TableHeader columns={headerData} />
              <TableBody pageData={pageData} />
            </table> :
            <p className="text-stone-100">La tabla esta vacia, no tienes {title} 😢.</p>
        }
      </div>

      {
        bodyData.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <TablePagination
              onPageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={currentPage}
            />

            <Text text={`total de ${title} ${filteredData.length || searchTerm.length ? filteredData.length : bodyData.length}`} />

            <div className="flex gap-3">
              <label htmlFor="numRows" className="text-stone-100">filas</label>
              <select name="numRows" id="numRows" onChange={handleChangeRowsPerPage} className="bg-stone-800 text-stone-100 hover:bg-stone-700">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        )
      }
    </section>
  );
}

CreateTable.propTypes = {
  bodyData: PropTypes.array.isRequired,
  headerData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CreateTable;