//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

const RootLayout = () => {
  return (
    <main className="">
      <Header />
      <HamburgerMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default RootLayout;
