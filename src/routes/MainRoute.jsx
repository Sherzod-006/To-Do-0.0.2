//IMPORTING RRD
import { createBrowserRouter } from "react-router-dom";
//IMPORTING LAYOUTS
import RootLayout from "../layouts/RootLayout";
//IMPORTING PAGES
import HomePage from "../pages/HomePage";
import AllPage from "../pages/AllPage";
import AddTaskPage from "../pages/AddTaskPage";
import SettingsPage from "../pages/SettingsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/all",
    element: <RootLayout />,
    children: [{ index: true, element: <AllPage /> }],
  },
  {
    path: "/add-task",
    element: <RootLayout />,
    children: [{ index: true, element: <AddTaskPage /> }],
  },
  {
    path: "/settings",
    element: <RootLayout />,
    children: [{ index: true, element: <SettingsPage /> }],
  },
]);
