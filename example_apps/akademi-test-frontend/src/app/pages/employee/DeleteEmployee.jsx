import { useNavigate, useParams } from "react-router-dom";
import { useDeleteEmployeeMutation, useGetEmployeeByIdQuery } from "../../store/api/employeesApi";

// Components
import Button from "../../components/common/Button";
import ButtonLink from "../../components/common/ButtonLink";
import Layout from "../../components/Layout";

function DeleteEmployee() {
  const params = useParams();
  const navigate = useNavigate();

  const [deleteEmployee] = useDeleteEmployeeMutation();
  const { data: result = { mesagge: "", result: [] } } = useGetEmployeeByIdQuery(params.id);
  const employeeToDelete = result.result;

  const handleDeleteEmployee = () => {
    deleteEmployee({ id: params.id })
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
      title="eliminar empleado"
    >
      <section className="flex flex-col gap-5 items-center">
        <p className="text-stone-100 text-xl">deseas eliminar el empleado {employeeToDelete.first_name}</p>

        <div className="flex gap-5">
          <Button
            icon="🗑"
            onClick={() => handleDeleteEmployee()}
            text="eliminar"
            title="borrar"
          />
          <Button
            icon="✖"
            onClick={() => navigate(`/employee/${params.id}`)}
            text="cancelar"
            title="cancelar"
          />
        </div>
      </section>
    </Layout >
  );
}

export default DeleteEmployee;
