import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/slices/employees/employeesSlice";

import { useNavigate } from "react-router-dom";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import FormEmployee from "../../components/common/form/FormEmployee";
import Layout from "../../components/Layout";

function NewEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddEmployee = (data) => {
    dispatch(addEmployee(data));
    navigate("/employee");
  }

  const menuActions = [
    <ButtonLink
      href="/employee"
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="nuevo empleado"
    >
      <FormEmployee onCreate={handleAddEmployee} />
    </Layout>
  );
}

export default NewEmployee;
