import { useState } from "react";
import { useCreateAssetMutation, useUpdateAssetMutation } from "../../../store/api/assetApi";
import { useNavigate, useParams } from "react-router-dom";

// Components
import Button from "../Button";
import InputField from "./InputField";

function FormAsset({ assetData }) {
  const [createAsset] = useCreateAssetMutation();
  const [updateAsset] = useUpdateAssetMutation();

  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState(assetData ? assetData.name : "");
  const [type, setType] = useState(assetData ? assetData.type : "");
  const [code, setCode] = useState(assetData ? assetData.code : "");
  const [marca, setMarca] = useState(assetData ? assetData.marca : "");
  const [description, setDescription] = useState(assetData ? assetData.description : "");
  const [purchaseDate, setPurchaseDate] = useState(assetData ? assetData.purchaseDate : "");

  const handleName = (event) => {
    if (event.target.selectionStart <= 15) {
      setName(event.target.value.toLowerCase());
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleType = (event) => {
    if (event.target.selectionStart <= 15) {
      setType(event.target.value.toLowerCase());
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleCode = (event) => {
    if (event.target.selectionStart <= 15) {
      setCode(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleMarca = (event) => {
    if (event.target.selectionStart <= 10) {
      setMarca(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleDescription = event => {
    if (event.target.selectionStart <= 30) {
      setDescription(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };
  const handlePurchaseDate = event => {
    if (event.target.selectionStart <= 15) {
      setPurchaseDate(event.target.value);
    } else {
      alert("alcanzo el maximo de caracteres permitidos");
    }
  };

  const handleSubmit = (evemt) => {
    evemt.preventDefault();

    if (
      name &&
      type
    ) {
      if (assetData) {
        updateAsset({
          _id: assetData._id,
          name: name,
          type: type,
          code: code,
          marca: marca,
          description: description,
          purchase_date: purchaseDate,
        });
      } else {
        createAsset({
          name: name,
          type: type,
          code: code,
          marca: marca,
          description: description,
          purchase_date: purchaseDate,
        });
      }

      setName("");
      setType("");
      setCode("");
      setMarca("");
      setDescription("");
      setPurchaseDate("");

      navigate("/asset");
    } else {
      alert("COMPLETA LOS CAMPOS REQUERIDOS!!!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <p className="text-stone-100">completa los campos con <span className="text-red-700 text-xl">*</span></p>
      <InputField
        label="nombre del activo"
        maxLength={15}
        name="name"
        onChange={handleName}
        placeholder="ej: silla de escritorio"
        required={true}
        value={name}
      />

      <InputField
        label="tipo"
        maxLength={15}
        name="type"
        onChange={handleType}
        placeholder="ej: mueble"
        required={true}
        value={type}
      />

      <InputField
        label="codigo"
        maxLength={15}
        name="code"
        onChange={handleCode}
        placeholder="ej: 20111111112"
        value={code}
      />

      <InputField
        label="marca"
        maxLength={10}
        name="marca"
        onChange={handleMarca}
        placeholder="ej: sony"
        value={marca}
      />

      <InputField
        label="descripcion"
        maxLength={30}
        name="description"
        onChange={handleDescription}
        placeholder="ej: color, tamaño..."
        value={description}
      />

      <InputField
        label="fecha de compra"
        name="fecha de compra"
        onChange={handlePurchaseDate}
        value={purchaseDate}
        type={"date"}
      />

      <div className="self-center flex gap-5">
        <Button
          icon="💾"
          text="guardar activo"
          title="enviar"
          type="submit"
        />

        <Button
          icon="✖"
          onClick={() => navigate(`/asset/${params.id}`)}
          text="cancelar"
          title="cancelar"
        />
      </div>
    </form>
  );
}

export default FormAsset;
