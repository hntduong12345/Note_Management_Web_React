import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthWrapper } from "./context/auth.context.jsx";

import LoginPage from "./pages/login/index.jsx";
import RegisterPage from "./pages/register/index.jsx";
import DashBoard from "./pages/dashboard/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  // {
  //   path: "register",
  //   element: <RegisterPage />,
  // },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </StrictMode>,
);
