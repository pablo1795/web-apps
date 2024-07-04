import { useNavigate, useParams } from "react-router-dom";
import { useDeleteAssetMutation, useGetAssetByIdQuery } from "../../store/api/assetApi";

// Components
import Button from "../../components/common/Button";
import ButtonLink from "../../components/common/ButtonLink";
import Layout from "../../components/Layout";

function DeleteAsset() {
  const params = useParams();
  const navigate = useNavigate();

  const [deleteAsset] = useDeleteAssetMutation();
  const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id);
  const assetToDelete = result.result;

  const handleDeleteAsset = () => {
    deleteAsset({ id: params.id })
    navigate("/asset");
  }

  const menuActions = [
    <ButtonLink
      href={`/asset/${params.id}`}
      icon="◀"
      text="atrás"
      title="volver a activos"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="eliminar activo"
    >
      <section className="flex flex-col gap-5 items-center">
        <p className="text-stone-100 text-xl">deseas eliminar el activo {assetToDelete.name}</p>

        <div className="flex gap-5">
          <Button
            icon="🗑"
            onClick={() => handleDeleteAsset()}
            text="eliminar"
            title="borrar"
          />
          <Button
            icon="✖"
            onClick={() => navigate(`/asset/${params.id}`)}
            text="cancelar"
            title="cancelar"
          />
        </div>
      </section>
    </Layout >
  );
}

export default DeleteAsset;
