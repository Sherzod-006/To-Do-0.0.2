//IMPORTING RRD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//IMPORTING LAYOUTS
import RootLayout from "./layouts/RootLayout";
//IMPORTING PAGES
import HomePage from "./pages/HomePage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
