import { useDispatch } from "react-redux";
import { addAsset } from "../../store/slices/assets/assetsSlice";

import { useNavigate } from "react-router-dom";

// Components
import ButtonLink from "../../components/common/ButtonLink";
import FormAsset from "../../components/common//form/FormAsset";
import Layout from "../../components/Layout";

function Newasset() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAsset = (data) => {
    dispatch(addAsset(data));
    navigate("/asset");
  }

  const menuActions = [
    <ButtonLink
      href="/asset"
      icon="◀"
      text="atrás"
      title="volver a activos"
    />
  ];

  return (
    <Layout
      menuActions={menuActions}
      title="nuevo activo"
    >
      <FormAsset onCreate={handleAddAsset} />
    </Layout>
  );
}

export default Newasset;
