import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;