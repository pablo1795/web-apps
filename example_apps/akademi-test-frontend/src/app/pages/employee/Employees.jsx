import { useGetAllEmployeesQuery } from "../../store/api/employeesApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import CreateTable from "../../components/common/table/CreateTable";
import Layout from "../../components/Layout";

function Employees() {
  const { data: result = { mesagge: "", result: [] }/*, isError, error*/ } = useGetAllEmployeesQuery();
  const employees = result.result;

  const prepareRow = employees.map((value) => ([
    value._id,
    value.first_name,
    value.last_name,
    value.team_id,
    <div className="flex items-center justify-center">
      <ButtonLink
        href={`/employee/${value._id}`}
        icon="📄"
        text="información"
        title="información"
      />
    </div>,
  ]));

  const menuActions = [
    <ButtonLink
      href="/employee/create_employee"
      icon="➕"
      text="nuevo"
      title="nuevo empleado"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="lista de empleado"
    >
      <CreateTable
        bodyData={prepareRow}
        headerData={["N° id", "apellido/s", "nombre/s", "comisión", "acciones"]}
        title="empleados"
      />
    </Layout>
  );
}

export default Employees;
