import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthWrapper } from "./context/auth.context.jsx";

import LoginPage from "./pages/login/index.jsx";
import RegisterPage from "./pages/register/index.jsx";
import DashBoard from "./pages/dashboard/index.jsx";
import NoteEditorPage from "./pages/note-editor/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "notes",
        element: <NoteEditorPage />,
        children: [
          {
            // This matches /notes (Create Mode)
            index: true,
            element: <NoteEditorPage />,
          },
          {
            // This matches /notes/{id} (Edit Mode)
            path: ":noteId",
            element: <NoteEditorPage />,
          },
        ],
      },
    ],
  },
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
