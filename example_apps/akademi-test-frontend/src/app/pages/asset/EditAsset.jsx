import { useNavigate, useParams } from "react-router-dom";
import { useGetAssetByIdQuery } from "../../store/api/assetApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import Layout from "../../components/Layout";
import FormAsset from "../../components/common/form/FormAsset";

function EditAsset() {
  const params = useParams();

  const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id);
  const assetToEdit = result.result;

  const navigate = useNavigate();

  const handleEditAsset = () => {
    navigate("/asset");
  }

  const menuActions = [
    <ButtonLink
      href={`/asset/${params.id}`}
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="editar activo"
    >
      <FormAsset assetData={assetToEdit} onEdit={handleEditAsset} />
    </Layout>
  );
}

export default EditAsset;
