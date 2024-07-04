import Assets from "../pages/asset/Assets";
import InfoAsset from "../pages/asset/InfoAsset";
import NewAsset from "../pages/asset/NewAsset";
import EditAsset from "../pages/asset/EditAsset";
import DeleteAsset from "../pages/asset/DeleteAsset";

const assetRoutes = [
  {
    path: "/asset",
    element: <Assets />
  },
  {
    path: "/asset/:id",
    element: <InfoAsset />
  },
  {
    path: "/asset/create_asset",
    element: <NewAsset />
  },
  {
    path: "/asset/update_asset/:id",
    element: <EditAsset />
  },
  {
    path: "/asset/delete_asset/:id",
    element: <DeleteAsset />
  }
];

export default assetRoutes;
