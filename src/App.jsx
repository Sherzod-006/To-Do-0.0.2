//IMPORTING RRD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//IMPORTING LAYOUTS
import RootLayout from "./layouts/RootLayout";

const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [<div>home</div>] },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
