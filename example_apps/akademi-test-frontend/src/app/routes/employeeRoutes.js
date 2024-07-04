import Employees from "../pages/employee/Employees";
import InfoEmployee from "../pages/employee/InfoEmployee";
import NewEmployee from "../pages/employee/NewEmployee";
import EditEmployee from "../pages/employee/EditEmployee";
import DeleteEmployee from "../pages/employee/DeleteEmployee";

const employeeRoutes = [
  {
    path: "/employee",
    element: <Employees />
  },
  {
    path: "/employee/:id",
    element: <InfoEmployee />
  },
  {
    path: "/employee/create_employee",
    element: <NewEmployee />
  },
  {
    path: "/employee/update_employee/:id",
    element: <EditEmployee />
  },
  {
    path: "/employee/delete_employee/:id",
    element: <DeleteEmployee />
  }
];

export default employeeRoutes;
