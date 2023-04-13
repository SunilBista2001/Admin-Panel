import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import Categories from "../pages/Categories/Categories";
import Questions from "../pages/Questions/Questions";
import Pages from "../pages/Pages/Pages";
import Login from "../pages/Login/Login";
import WalletTransaction from "../pages/WalletTransaction/WalletTransaction";
import RewardTransaction from "../pages/RewardTransaction/RewardTransaction";
import Wallet from "../pages/Wallet/Wallet";
import Users from "../pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <Users />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/wallet-transaction",
        element: <WalletTransaction />,
      },
      {
        path: "/reward-transaction",
        element: <RewardTransaction />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <h1>Error Page</h1>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <h1>Error Page</h1>,
      },
    ],
  },
]);

export default router;
