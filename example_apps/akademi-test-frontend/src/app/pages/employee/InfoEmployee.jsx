import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../../store/api/employeesApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import Layout from "../../components/Layout";
import List from "../../components/common/List";

function InfoEmployee() {
  const params = useParams();
  const { data: result = { mesagge: "", result: [] }, isError, error } = useGetEmployeeByIdQuery(params.id);
  const employee = result.result;

  const menuActions = [
    <ButtonLink
      href="/employee"
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ];

  const employeData = [
    {
      title: "Apellido y nombre",
      text: employee.last_name + " " + employee.first_name,
    },
    {
      title: "CUIT",
      text: employee.cuit || "no definido",
    },
    {
      title: "Comision",
      text: employee.team_id || "no definido",
    },
    {
      title: "Fecha de ingreso",
      text: employee.join_date || "no definido",
    },
    {
      title: "Rol",
      text: employee.rol || "no definido",
    },
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="informacion del empleado"
    >
      <List dataList={employeData} />

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/employee/update_employee/${employee._id}`}
          icon="🖍"
          title='actualizar'
          text='editar'
        />

        <ButtonLink
          href={`/employee/delete_employee/${employee._id}`}
          icon="🗑"
          text='eliminar'
          title='borrar'
        />
      </div>
    </Layout>
  );
}

export default InfoEmployee;
