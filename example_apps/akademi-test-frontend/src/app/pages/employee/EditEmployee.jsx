import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../../store/api/employeesApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import FormEmployee from "../../components/common/form/FormEmployee";
import Layout from "../../components/Layout";

function EditEmployee() {
  const navigate = useNavigate();
  const params = useParams();

  const { data: result = { mesagge: "", result: [] } } = useGetEmployeeByIdQuery(params.id);
  const employeeToEdit = result.result;

  const handleEditEmployee = () => {
    navigate("/employee");
  }

  const menuActions = [
    <ButtonLink
      href={`/employee/${params.id}`}
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="editar empleado"
    >
      <FormEmployee employeeData={employeeToEdit} onEdit={handleEditEmployee} />
    </Layout>
  );
}

export default EditEmployee;
