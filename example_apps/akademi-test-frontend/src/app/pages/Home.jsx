// import emple, { setSelectedEmployee, employeeSlice } from "../store/slices/employees/employeesSlice2Exam";
//@ts-check
import { useSelector } from "react-redux";


// Components
import Layout from "../components/Layout";
import Text from "../components/common/Text";

function Home() {

  const employeesState = useSelector(state => state);

  console.log("employeesState")
  console.log(employeesState)
  // console.log(emple)
  // console.log(setSelectedEmployee)
  // console.log(employeeSlice)

  return (
    <Layout title="inicio">
      <Text text="inicio de la app" />
    </Layout>
  );
}

export default Home;
