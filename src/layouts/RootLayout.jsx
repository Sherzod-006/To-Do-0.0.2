//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING HOOKS
import { useState } from "react";
//IMPORTING COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="grid grid-cols-18 grid-rows-9 min-h-screen  grid-flow-col-dense">
      <Header setIsOpen={setIsOpen} />
      <HamburgerMenu isOpen={isOpen} />
      <main
        className={`${
          isOpen ? "col-span-15" : "col-span-17"
        } row-span-8 max-h-155 overflow-y-auto`}
      >
        <Outlet />
      </main>
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
