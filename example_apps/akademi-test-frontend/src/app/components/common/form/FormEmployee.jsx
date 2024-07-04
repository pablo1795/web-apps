import { useState } from "react";
import { useCreateEmployeeMutation, useUpdateEmployeeMutation } from "../../../store/api/employeesApi";
import { useNavigate, useParams } from "react-router-dom";

// Components
import Button from "../Button";
import InputField from "./InputField";

function FormEmployee({ employeeData }) {
  const [createEmployee] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const params = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(employeeData ? employeeData.first_name : "");
  const [lastName, setLastName] = useState(employeeData ? employeeData.last_name : "");
  const [cuit, setCuit] = useState(employeeData ? employeeData.cuit : "");
  const [team, setTeam] = useState(employeeData ? employeeData.team_id : "");
  const [rol, setRol] = useState(employeeData ? employeeData.rol : "");

  const handleFirstName = (event) => {
    if (event.target.selectionStart <= 15) {
      setFirstName(event.target.value.toLowerCase());
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleLastName = (event) => {
    if (event.target.selectionStart <= 15) {
      setLastName(event.target.value.toLowerCase());
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleCuit = (event) => {
    if (event.target.selectionStart <= 15) {
      setCuit(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleTeam = (event) => {
    if (event.target.selectionStart <= 5) {
      setTeam(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleRol = event => {
    if (event.target.selectionStart <= 10) {
      setRol(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleSubmit = (evemt) => {
    evemt.preventDefault();

    if (
      firstName &&
      lastName &&
      cuit
    ) {
      if (employeeData) {
        updateEmployee({
          _id: employeeData._id,
          first_name: firstName,
          last_name: lastName,
          cuit: cuit,
          team_id: team,
          rol: rol,
        });
      } else {
        createEmployee({
          first_name: firstName,
          last_name: lastName,
          cuit: cuit,
          team_id: team,
          join_date: Date.now(),
          rol: rol,
        });
      }

      setFirstName("");
      setLastName("");
      setCuit("");
      setTeam("");
      setRol("");

      navigate("/employee");
    } else {
      alert("COMPLETA LOS CAMPOS REQUERIDOS!!!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <p className="text-stone-100">completa los campos con <span className="text-red-700 text-xl">*</span></p>
      <InputField
        label="nombre"
        maxLength={15}
        name="first_name"
        onChange={handleFirstName}
        placeholder="ej: mario"
        required={true}
        value={firstName}
      />

      <InputField
        label="apellido"
        maxLength={15}
        name="last_name"
        onChange={handleLastName}
        placeholder="ej: bross"
        required={true}
        value={lastName}
      />

      <InputField
        label="cuit"
        maxLength={15}
        name="cuit"
        onChange={handleCuit}
        placeholder="ej: 20111111112"
        required={true}
        value={cuit}
      />

      <InputField
        label="comisión"
        maxLength={5}
        name="team"
        onChange={handleTeam}
        placeholder="ej: A1"
        value={team}
      />

      <InputField
        label="rol"
        maxLength={10}
        name="rol"
        onChange={handleRol}
        placeholder="ej: dev"
        value={rol}
      />

      <div className="self-center flex gap-5">
        <Button
          icon="💾"
          text="guardar empleado"
          title="enviar"
          type="submit"
        />

        <Button
          icon="✖"
          onClick={() => navigate(`/employee/${params.id}`)}
          text="cancelar"
          title="cancelar"
        />
      </div>
    </form>
  );
}

export default FormEmployee;
