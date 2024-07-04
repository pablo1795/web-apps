import { useGetAllAssetsQuery } from "../../store/api/assetApi";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import CreateTable from "../../components/common/table/CreateTable";
import Layout from "../../components/Layout";

const menuActions = [
  <ButtonLink
    href="/asset/create_asset"
    icon="➕"
    text="nuevo"
    title="nuevo activo"
  />
];

function Assets() {
  const { data: result = { mesagge: "", result: [] }/*, isError, error*/ } = useGetAllAssetsQuery();
  const asset = result.result;

  const prepareRow = asset.map((value) => ([
    value.name,
    value.type,
    value.code,
    value.marca,
    <div className="flex items-center justify-center">
      <ButtonLink
        href={`/asset/${value._id}`}
        icon="📄"
        text="información"
        title="informacion"
      />
    </div>,
  ]));

  return (
    <Layout
      menuActions={menuActions}
      title="lista de activos"
    >
      <CreateTable
        bodyData={prepareRow}
        headerData={["nombre", "tipo", "codigo", "marca", "acciones"]}
        title="activos"
      />
    </Layout>
  );
}

export default Assets;
