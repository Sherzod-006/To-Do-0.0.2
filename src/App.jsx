//IMPORTING RRD
import { RouterProvider } from "react-router-dom";
//IMPORTING ROUTES
import { routes } from "./routes/MainRoute";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
