import { useParams } from "react-router-dom";
import { useGetAssetByIdQuery } from "../../store/api/assetApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import Layout from "../../components/Layout";
import List from "../../components/common/List";

function InfoAsset() {
  const params = useParams();
  const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id);
  const asset = result.result;

  const menuActions = [
    <ButtonLink
      href="/asset"
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ];

  const employeData = [
    {
      title: "Nombre",
      text: asset.name,
    },
    {
      title: "Tipo",
      text: asset.type,
    },
    {
      title: "Codigo",
      text: asset.code,
    },
    {
      title: "Marca",
      text: asset.marca,
    },
    {
      title: "Descripción",
      text: asset.description,
    },
    {
      title: "Fecha de compra",
      text: asset.purchase_date,
    },
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="informacion del activo"
    >
      <List dataList={employeData} />

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/asset/update_asset/${asset._id}`}
          icon="🖍"
          title="actualizar"
          text="editar"
        />

        <ButtonLink
          href={`/asset/delete_asset/${asset._id}`}
          icon="🗑"
          text="eliminar"
          title="borrar"
        />
      </div>
    </Layout>
  );
}

export default InfoAsset;
